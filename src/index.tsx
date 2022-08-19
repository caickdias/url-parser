import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PreferencesProvider } from './context/Provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </React.StrictMode>
);
