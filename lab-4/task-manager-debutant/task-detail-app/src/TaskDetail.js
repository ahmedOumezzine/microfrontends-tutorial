import React, { memo, useMemo } from 'react';

const details = {
  1: { title: 'Auditer les bundles', description: 'Comparer la taille des remotes et verifier les dependances partagees.', metric: '180 Ko vises' },
  2: { title: 'Decouper les vendors', description: 'Activer cacheGroups pour reutiliser les librairies communes.', metric: '1 chunk vendors' },
  3: { title: 'Mesurer le chargement', description: 'Afficher un spinner pendant le chargement paresseux des remotes.', metric: '< 1 seconde' },
};

function TaskDetail({ taskId = '1' }) {
  const task = useMemo(() => details[taskId] || details[1], [taskId]);
  return (
    <div className="card">
      <div className="card-header"><h2 className="h4 mb-0">Detail</h2></div>
      <div className="card-body">
        <h3 className="h5">{task.title}</h3>
        <p>{task.description}</p>
        <span className="badge text-bg-success">{task.metric}</span>
      </div>
    </div>
  );
}

export default memo(TaskDetail);
