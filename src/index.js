import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SpendingsContextProvider } from './store/spendings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpendingsContextProvider>
      <App />
    </SpendingsContextProvider>
  </React.StrictMode>
);
