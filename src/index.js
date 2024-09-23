import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const {name} = undefined || {};

console.log(name);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);