import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDetail from './WeatherDetail';

createRoot(document.getElementById('root')).render(<WeatherDetail city="Montreal" />);
