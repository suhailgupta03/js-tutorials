import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// index.js is ENTRY POINT for the react application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// The above statment INJECTS all the REACT code inside the div root

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();