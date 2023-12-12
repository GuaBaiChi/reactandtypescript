import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GoalApp from './goalComponents/GoalApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoalApp />
);
