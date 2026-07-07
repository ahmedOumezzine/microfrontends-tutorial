import React, { Suspense, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChartList = React.lazy(() => import('chartListApp/ChartList'));
const ReportDetail = React.lazy(() => import('reportDetailApp/ReportDetail'));

function App() {
  const [report, setReport] = useState('conversion');
  return (
    <>
      <nav className="navbar navbar-dark bg-dark"><div className="container"><span className="navbar-brand">Analytics App Advanced - Lab 10</span><span className="badge text-bg-light">CI/CD</span></div></nav>
      <main className="container py-4">
        <div className="alert alert-info">Article: CI/CD pour les Micro-Frontends.</div>
        <div className="row g-4">
          <section className="col-md-7">
            <Suspense fallback={<div className="spinner-border text-dark" role="status" />}>
              <ChartList onReportSelected={setReport} selectedReport={report} />
            </Suspense>
          </section>
          <section className="col-md-5">
            <Suspense fallback={<div className="spinner-border text-dark" role="status" />}>
              <ReportDetail reportId={report} />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
