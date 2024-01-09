import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import SingleThread from './components/SingleThread';
import './index.css';
import CreateThreadForm from './components/CreateThreadForm';


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
        element: <CreateThreadForm/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
