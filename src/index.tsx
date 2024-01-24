import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import SingleThread from './components/SingleThread';
import './index.css';
import ThreadInput from './components/ThreadInput';
import LoginButton from './components/LoginButton';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home/> },
      {
        path: "/thread/:id",
        element: <SingleThread />,
      },
      {
        path: "/create",
        element: <ThreadInput/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <RouterProvider router={router} />

);
