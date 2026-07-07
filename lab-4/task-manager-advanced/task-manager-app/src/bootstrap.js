import React, { Suspense, useCallback, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = React.lazy(() => import('taskListApp/TaskList'));
const TaskDetail = React.lazy(() => import('taskDetailApp/TaskDetail'));

function App() {
  const [selectedTask, setSelectedTask] = useState('1');
  const [activeFilter, setActiveFilter] = useState('Toutes');
  const handleSelectTask = useCallback((taskId) => setSelectedTask(taskId), []);
  const handleFilterChange = useCallback((filter) => setActiveFilter(filter), []);
  const metrics = useMemo(() => [
    { label: 'Chunks charges', value: '3' },
    { label: 'Memoisation', value: 'memo' },
    { label: 'Lazy remotes', value: '2' },
  ], []);

  return (
    <main className="bg-body-tertiary min-vh-100">
      <nav className="navbar navbar-dark bg-dark border-bottom border-success">
        <div className="container">
          <span className="navbar-brand fw-semibold">Task Manager Advanced</span>
          <span className="badge text-bg-success">React.lazy + Suspense</span>
        </div>
      </nav>

      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-end g-4">
            <div className="col-lg-7">
              <p className="text-uppercase text-success fw-semibold small mb-2">Lab 4 advanced</p>
              <h1 className="display-6 fw-bold mb-3">Performance dans les Micro-Frontends React</h1>
              <p className="lead text-white-50 mb-0">
                Les remotes sont chargees a la demande, les callbacks sont stabilises et les composants restent memoises.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="row g-2">
                {metrics.map((metric) => (
                  <div className="col-4" key={metric.label}>
                    <div className="border border-secondary rounded p-3 text-center">
                      <div className="h4 mb-0">{metric.value}</div>
                      <small className="text-white-50">{metric.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-4">
        <div className="alert alert-info d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>Article: Optimisation des performances dans les Micro-Frontends.</span>
          <strong>Remote active: {selectedTask}</strong>
        </div>

        <div className="row g-4">
          <section className="col-lg-5">
            <Suspense fallback={<div className="placeholder-glow"><span className="placeholder col-12 rounded" style={{ height: 260 }} /></div>}>
              <TaskList
                onTaskSelected={handleSelectTask}
                selectedTask={selectedTask}
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
              />
            </Suspense>
          </section>
          <section className="col-lg-7">
            <Suspense fallback={<div className="placeholder-glow"><span className="placeholder col-12 rounded" style={{ height: 260 }} /></div>}>
              <TaskDetail taskId={selectedTask} />
            </Suspense>
          </section>
        </div>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
