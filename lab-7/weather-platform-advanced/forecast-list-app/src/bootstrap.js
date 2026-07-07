import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForecastList from './ForecastList';

createRoot(document.getElementById('root')).render(<ForecastList selectedCity="Montreal" />);
