import React from 'react';
import ReactDOM from 'react-dom/client';
import { Logic } from '@root/logic/Logic';
import App from '@root/App';
import reportWebVitals from '@root/reportWebVitals';
import './assets/scss/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App logic={new Logic()} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();