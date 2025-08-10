import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS
import App from './App'; // Import the main App component

// Create a root to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
