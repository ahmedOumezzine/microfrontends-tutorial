import React, { memo } from 'react';

const tasks = [
  { id: '1', title: 'Auditer les bundles', status: 'Priorite haute' },
  { id: '2', title: 'Decouper les vendors', status: 'En cours' },
  { id: '3', title: 'Mesurer le chargement', status: 'A verifier' },
];

function TaskList({ onTaskSelected = () => {}, selectedTask }) {
  return (
    <div className="card">
      <div className="card-header"><h2 className="h4 mb-0">Taches</h2></div>
      <div className="list-group list-group-flush">
        {tasks.map((task) => (
          <button
            key={task.id}
            className={`list-group-item list-group-item-action ${selectedTask === task.id ? 'active' : ''}`}
            onClick={() => onTaskSelected(task.id)}
          >
            <strong>{task.title}</strong>
            <span className="d-block small">{task.status}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(TaskList);
