import React, { Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForecastList = React.lazy(() => import('forecastListApp/ForecastList'));
const WeatherDetail = React.lazy(() => import('weatherDetailApp/WeatherDetail'));

const weatherDetails = {
  Montreal: { temp: 22, state: 'Nuageux', humidity: 62, wind: '18 km/h', advice: 'Prenez une veste legere.' },
  Toronto: { temp: 25, state: 'Soleil', humidity: 48, wind: '12 km/h', advice: 'Ideal pour une marche.' },
  Quebec: { temp: 19, state: 'Pluie fine', humidity: 76, wind: '20 km/h', advice: 'Gardez un parapluie.' },
  Vancouver: { temp: 17, state: 'Averses', humidity: 81, wind: '14 km/h', advice: 'Planifiez une activite interieure.' },
};

function App() {
  const [city, setCity] = useState('Montreal');
  const [viewHistory, setViewHistory] = useState([]);

  useEffect(() => {
    const listener = (event) => {
      const nextCity = event.detail.city;
      const item = weatherDetails[nextCity] || weatherDetails.Montreal;

      setCity(nextCity);
      setViewHistory((current) => [
        ...current,
        { city: nextCity, ...item, key: `${nextCity}-${current.length + 1}` },
      ]);
    };

    window.addEventListener('weather:city-selected', listener);
    return () => window.removeEventListener('weather:city-selected', listener);
  }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-primary"><div className="container"><span className="navbar-brand">Weather App Advanced - Lab 7</span><span className="badge text-bg-light">{city}</span></div></nav>
      <main className="container py-4">
        <div className="alert alert-info">Article: Communication dans les Micro-Frontends.</div>
        <div className="row g-4">
          <section className="col-md-5">
            <Suspense fallback={<div className="spinner-border text-primary" role="status" />}>
              <ForecastList selectedCity={city} />
            </Suspense>
          </section>
          <section className="col-md-7">
            <Suspense fallback={<div className="spinner-border text-primary" role="status" />}>
              <WeatherDetail city={city} />
            </Suspense>
          </section>
        </div>
        {viewHistory.length > 0 && (
          <section className="mt-4" aria-label="Historique des consultations meteo">
            <h2 className="h4">Historique des consultations</h2>
            <div className="table-responsive">
              <table className="table table-striped table-bordered align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ville</th>
                    <th scope="col">Temperature</th>
                    <th scope="col">Etat</th>
                    <th scope="col">Humidite</th>
                    <th scope="col">Vent</th>
                    <th scope="col">Conseil</th>
                  </tr>
                </thead>
                <tbody>
                  {viewHistory.map((entry, index) => (
                    <tr key={entry.key}>
                      <th scope="row">{index + 1}</th>
                      <td>{entry.city}</td>
                      <td>{entry.temp} C</td>
                      <td>{entry.state}</td>
                      <td>{entry.humidity}%</td>
                      <td>{entry.wind}</td>
                      <td>{entry.advice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
