import React from 'react';
import ReactDOM from 'react-dom/client';
import GoalApp from './goalComponents/GoalApp';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    {/* <GoalApp /> */}
    <App />
  </div>
);
