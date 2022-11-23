import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Navigeerimiseks:
// 1. npm i react-router-dom <- vajalikud failid node_modules sisse
// 2. BrowserRouter tag App tag ümber
// 3. App.js sees <Routes></Routes>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// let muutuja = 3;
// muutuja = 2;
// .red{ #ff0000}
// .red{ #ee0000}
