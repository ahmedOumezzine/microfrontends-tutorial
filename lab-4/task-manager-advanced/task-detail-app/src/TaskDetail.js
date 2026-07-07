import React, { memo, useMemo } from 'react';

const details = {
  1: { title: 'Auditer les bundles', description: 'Comparer la taille des remotes et verifier les dependances partagees.', metric: '180 Ko vises', impact: 'Detecte les dependances trop lourdes.', checks: ['Analyser dist', 'Comparer vendors', 'Noter les remotes'] },
  2: { title: 'Decouper les vendors', description: 'Activer cacheGroups pour reutiliser les librairies communes.', metric: '1 chunk vendors', impact: 'Ameliore le cache navigateur.', checks: ['Verifier splitChunks', 'Nommer vendors', 'Tester build'] },
  3: { title: 'Mesurer le chargement', description: 'Afficher un etat de chargement pendant les imports distants.', metric: '< 1 seconde', impact: 'Rend le lazy loading visible et rassurant.', checks: ['Tester Suspense', 'Recharger la page', 'Observer fallback'] },
  4: { title: 'Stabiliser les callbacks', description: 'Utiliser useCallback pour eviter de propager des references instables.', metric: '0 rendu inutile', impact: 'Reduit le travail React dans les remotes memoisees.', checks: ['Memoiser callback', 'Passer props stables', 'Verifier selection'] },
  5: { title: 'Verifier le cache navigateur', description: 'S assurer que les chunks communs peuvent etre reutilises entre rechargements.', metric: 'Cache reutilise', impact: 'Diminue le cout des visites suivantes.', checks: ['Inspecter network', 'Comparer reload', 'Valider vendors'] },
};

function TaskDetail({ taskId = '1' }) {
  const task = useMemo(() => details[taskId] || details[1], [taskId]);
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-header bg-white border-0 pt-4 px-4">
        <p className="text-uppercase text-primary fw-semibold small mb-1">Remote : task-detail-app</p>
        <div className="d-flex justify-content-between align-items-start gap-3">
          <h2 className="h4 mb-0">{task.title}</h2>
          <span className="badge text-bg-success">{task.metric}</span>
        </div>
      </div>
      <div className="card-body p-4">
        <p className="lead">{task.description}</p>
        <div className="alert alert-success">{task.impact}</div>
        <h3 className="h6 text-uppercase text-muted">Checklist</h3>
        <ul className="list-group list-group-flush">
          {task.checks.map((check) => (
            <li className="list-group-item px-0 d-flex justify-content-between" key={check}>
              <span>{check}</span>
              <span className="badge text-bg-light border text-dark">OK</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(TaskDetail);
