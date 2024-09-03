import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Selecciona el elemento de destino
const rootElement = document.getElementById('root');

// Crea un contenedor root
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
