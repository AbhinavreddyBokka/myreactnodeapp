// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: You can use this for your CSS styles
import App from './App'; // Ensure this matches the file name exactly

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
