import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript

// Remove unnecessary import for Popper, unless you need it separately.

// Find the 'root' element in your HTML where you want to render your React app.
const rootElement = document.getElementById('root');

// Render your React app inside the root element.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want to measure and report web vitals performance, use reportWebVitals function.
reportWebVitals(console.log); // Pass the console.log function as an argument for reporting.
