import React from 'react';
import { createRoot } from 'react-dom/client'; // Update the import

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
