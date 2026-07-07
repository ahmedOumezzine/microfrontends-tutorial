const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const root = path.resolve(__dirname, '..');
const stateFile = path.join(root, '.dev-server-pids.json');
const npmCmd = 'C:\\Program Files\\nodejs\\npm.cmd';

function readState() {
  if (!fs.existsSync(stateFile)) return {};
  return JSON.parse(fs.readFileSync(stateFile, 'utf8'));
}

function writeState(state) {
  fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));
}

function start(lab, apps) {
  const state = readState();
  state[lab] = [];

  for (const app of apps) {
    const cwd = path.join(root, app.dir);
    const logDir = path.join(root, app.logDir);
    fs.mkdirSync(logDir, { recursive: true });
    const out = fs.openSync(path.join(logDir, `${app.name}.log`), 'w');
    const err = fs.openSync(path.join(logDir, `${app.name}.err.log`), 'w');
    const child = spawn(`"${npmCmd}" run start`, {
      cwd,
      detached: true,
      stdio: ['ignore', out, err],
      shell: true,
      windowsHide: true,
    });
    child.unref();
    state[lab].push({ name: app.name, pid: child.pid, cwd });
    console.log(`${app.name} ${child.pid}`);
  }

  writeState(state);
}

function stop(lab) {
  const state = readState();
  const apps = state[lab] || [];
  for (const app of apps) {
    try {
      spawn('taskkill.exe', ['/PID', String(app.pid), '/T', '/F'], {
        stdio: 'ignore',
        windowsHide: true,
      });
      console.log(`stopping ${app.name} ${app.pid}`);
    } catch (error) {
      console.log(`unable to stop ${app.name} ${app.pid}: ${error.message}`);
    }
  }
  delete state[lab];
  writeState(state);
}

const labs = {
  'lab-1': [
    { name: 'host', dir: 'lab-1/micro-blog/host-app', logDir: 'lab-1' },
    { name: 'articles-list', dir: 'lab-1/micro-blog/articles-list-app', logDir: 'lab-1' },
    { name: 'article-details', dir: 'lab-1/micro-blog/article-details-app', logDir: 'lab-1' },
  ],
};

const [command, lab] = process.argv.slice(2);
if (!command || !lab) {
  console.error('Usage: node scripts/dev-server-manager.js <start|stop> <lab>');
  process.exit(1);
}

if (command === 'start') start(lab, labs[lab]);
else if (command === 'stop') stop(lab);
else {
  console.error(`Unknown command ${command}`);
  process.exit(1);
}
