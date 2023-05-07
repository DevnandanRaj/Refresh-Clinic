import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthcontextProvider from './Context/AuthContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthcontextProvider>
        <App />
      </AuthcontextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
