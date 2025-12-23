import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the '/client' part
import App from './App';

// This is the modern React 18+ way to render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);