import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { GeoLocationProvider } from './contexts/GeoLocationContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css'
import './utils/i18n';

ReactDOM.render(
  <React.StrictMode>
    <GeoLocationProvider>
      <App />
    </GeoLocationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
