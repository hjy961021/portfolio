import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

import './assets/sass/style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<Router />);
