import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavBar } from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { GoogleAds } from './components/GoogleAds';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
    <GoogleAds />
    <App />
    <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
