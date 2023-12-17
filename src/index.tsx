import React from 'react';
import ReactDOM from 'react-dom/client';
import GoalApp from './apps/goal/GoalApp';
import TimerApp from './apps/timer/TimerApp';
// import './index.css'
import DataFetching from './apps/datafetching/DataFetching';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    {/* <GoalApp /> */}
    {/* <TimerApp /> */}
    <DataFetching />
  </div>
);
