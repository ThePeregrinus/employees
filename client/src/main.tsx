import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

import { store } from './app/store';

import { Paths } from './paths';

import { Login } from './pages/login';
import { Register } from './pages/register';

const router = createBrowserRouter([
  { path: Paths.home, element: <h1>Home</h1> },
  { path: Paths.login, element: <Login /> },
  { path: Paths.register, element: <Register /> },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
