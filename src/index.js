import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './styles/index.scss';

import { StoresProvider } from './stores';

ReactDOM.render(
  <React.StrictMode>
    <StoresProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoresProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
