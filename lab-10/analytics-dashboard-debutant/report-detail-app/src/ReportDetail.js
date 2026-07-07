import React from 'react';

const reports = {
  conversion: { title: 'Rapport conversion', value: '18.4%', text: 'Le taux progresse apres automatisation du deploiement.' },
  pipeline: { title: 'Rapport pipeline', value: '9 min', text: 'Build, tests et packaging sont executes pour chaque remote.' },
};

export default function ReportDetail({ reportId = 'conversion' }) {
  const report = reports[reportId] || reports.conversion;
  return (
    <div className="card">
      <div className="card-header"><h2 className="h4 mb-0">Rapport</h2></div>
      <div className="card-body">
        <h3 className="h5">{report.title}</h3>
        <p className="display-6">{report.value}</p>
        <p>{report.text}</p>
      </div>
    </div>
  );
}
