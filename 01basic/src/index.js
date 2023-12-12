import React from 'react';   //core foundational library(takes references)
import ReactDOM from 'react-dom/client';    //library implementation on web

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


