import React from 'react';

const details = {
  Montreal: { humidity: 62, wind: '18 km/h', advice: 'Prenez une veste legere.' },
  Toronto: { humidity: 48, wind: '12 km/h', advice: 'Ideal pour une marche.' },
  Quebec: { humidity: 76, wind: '20 km/h', advice: 'Gardez un parapluie.' },
};

export default function WeatherDetail({ city = 'Montreal' }) {
  const item = details[city] || details.Montreal;
  return (
    <div className="card">
      <div className="card-header"><h2 className="h4 mb-0">Detail meteo</h2></div>
      <div className="card-body">
        <h3 className="h5">{city}</h3>
        <p>Humidite: {item.humidity}%</p>
        <p>Vent: {item.wind}</p>
        <div className="alert alert-primary mb-0">{item.advice}</div>
      </div>
    </div>
  );
}
