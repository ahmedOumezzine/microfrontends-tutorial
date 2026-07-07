import React, { memo } from 'react';

const tasks = [
  { id: '1', title: 'Auditer les bundles', status: 'Priorite haute', area: 'Audit', estimate: '25 min' },
  { id: '2', title: 'Decouper les vendors', status: 'En cours', area: 'Build', estimate: '40 min' },
  { id: '3', title: 'Mesurer le chargement', status: 'A verifier', area: 'Mesure', estimate: '20 min' },
  { id: '4', title: 'Stabiliser les callbacks', status: 'Optimisation', area: 'Rendu', estimate: '15 min' },
  { id: '5', title: 'Verifier le cache navigateur', status: 'A verifier', area: 'Build', estimate: '30 min' },
];

function TaskList({ onTaskSelected = () => {}, selectedTask, activeFilter = 'Toutes', onFilterChange = () => {} }) {
  const filters = ['Toutes', ...Array.from(new Set(tasks.map((task) => task.area)))];
  const visibleTasks = activeFilter === 'Toutes' ? tasks : tasks.filter((task) => task.area === activeFilter);

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-white border-0 pt-4 px-4">
        <p className="text-uppercase text-success fw-semibold small mb-1">Remote : task-list-app</p>
        <h2 className="h4 mb-3">File de performance</h2>
        <div className="d-flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`btn btn-sm ${activeFilter === filter ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="list-group list-group-flush">
        {visibleTasks.map((task) => (
          <button
            key={task.id}
            className={`list-group-item list-group-item-action p-3 ${selectedTask === task.id ? 'active' : ''}`}
            onClick={() => onTaskSelected(task.id)}
          >
            <div className="d-flex justify-content-between gap-3">
              <strong>{task.title}</strong>
              <span className="badge text-bg-light border text-dark">{task.area}</span>
            </div>
            <span className="d-block small">{task.status} - {task.estimate}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(TaskList);
