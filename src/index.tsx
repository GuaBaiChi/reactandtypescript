import React from 'react';
// import './index.css'
import ReactDOM from 'react-dom/client';
import GoalApp from './apps/goal/GoalApp';
import TimerApp from './apps/timer/TimerApp';
import DataFetching from './apps/datafetching/DataFetching';
import ReduxApp from './apps/redux/ReduxApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    {/* <GoalApp /> */}
    {/* <TimerApp /> */}
    {/* <DataFetching /> */}
    <ReduxApp />
  </div>
);
