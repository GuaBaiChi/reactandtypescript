import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import SessionsPage from './pages/Sessions';
import SessionPage from './pages/Session';
import Root from './pages/Root';
import './index.css'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'sessions', element: <SessionsPage /> },
      { path: 'sessions/:id', element: <SessionPage /> },
    ],
  },
]);

function SessionsApp() {
  return <RouterProvider router={Router} />;
}

export default SessionsApp;
