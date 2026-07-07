import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function ChartList({ onReportSelected = () => {}, selectedReport = 'conversion' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: ['Build', 'Test', 'Deploy'],
        datasets: [{ label: 'Minutes CI', data: [4, 3, 2], backgroundColor: ['#0d6efd', '#198754', '#6c757d'] }],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
    return () => chart.destroy();
  }, []);

  return (
    <div className="card">
      <div className="card-header"><h2 className="h4 mb-0">Graphiques</h2></div>
      <div className="card-body">
        <div style={{ height: 260 }}><canvas ref={canvasRef} aria-label="Graphique des etapes CI" role="img" /></div>
        <div className="btn-group mt-3">
          <button className={`btn btn-outline-dark ${selectedReport === 'conversion' ? 'active' : ''}`} onClick={() => onReportSelected('conversion')}>Conversion</button>
          <button className={`btn btn-outline-dark ${selectedReport === 'pipeline' ? 'active' : ''}`} onClick={() => onReportSelected('pipeline')}>Pipeline</button>
        </div>
      </div>
    </div>
  );
}
