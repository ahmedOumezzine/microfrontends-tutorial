import React, { Suspense, useCallback, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = React.lazy(() => import('taskListApp/TaskList'));
const TaskDetail = React.lazy(() => import('taskDetailApp/TaskDetail'));

function App() {
  const [selectedTask, setSelectedTask] = useState('1');
  const handleSelectTask = useCallback((taskId) => setSelectedTask(taskId), []);

  return (
    <>
      <nav className="navbar navbar-dark bg-success">
        <div className="container">
          <span className="navbar-brand">Task Manager - Lab 4</span>
          <span className="badge text-bg-light">Bundles optimises</span>
        </div>
      </nav>
      <main className="container py-4">
        <div className="alert alert-info">Article: Optimisation des performances dans les Micro-Frontends.</div>
        <div className="row g-4">
          <section className="col-md-4">
            <Suspense fallback={<div className="spinner-border text-success" role="status" />}>
              <TaskList onTaskSelected={handleSelectTask} selectedTask={selectedTask} />
            </Suspense>
          </section>
          <section className="col-md-8">
            <Suspense fallback={<div className="spinner-border text-success" role="status" />}>
              <TaskDetail taskId={selectedTask} />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
