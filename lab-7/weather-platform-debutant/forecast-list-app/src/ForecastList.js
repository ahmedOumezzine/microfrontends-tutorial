import React from 'react';

const forecasts = [
  { city: 'Montreal', temp: 22, state: 'Nuageux' },
  { city: 'Toronto', temp: 25, state: 'Soleil' },
  { city: 'Quebec', temp: 19, state: 'Pluie fine' },
];

export default function ForecastList({ selectedCity }) {
  const selectCity = (city) => {
    window.dispatchEvent(new CustomEvent('weather:city-selected', { detail: { city } }));
  };

  return (
    <div className="card">
      <div className="card-header"><h2 className="h4 mb-0">Previsions</h2></div>
      <div className="list-group list-group-flush">
        {forecasts.map((item) => (
          <button key={item.city} className={`list-group-item list-group-item-action ${selectedCity === item.city ? 'active' : ''}`} onClick={() => selectCity(item.city)}>
            <div className="d-flex justify-content-between"><strong>{item.city}</strong><span>{item.temp} C</span></div>
            <span className="small">{item.state}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
