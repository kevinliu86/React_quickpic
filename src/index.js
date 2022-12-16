import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AllFeeds from './pages/AllFeeds';
import ErrorBoundary from './error-page';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:5000/';
const router = createBrowserRouter([
  {
    // it renders this element
    element: <Login />,
    // when the URL matches this segment
    path: "/",
    // and renders this element in case something went wrong
    errorElement: <ErrorBoundary />,
  },
  {
    // it renders this element
    element: <Register />,
    // when the URL matches this segment
    path: "/register",
    // and renders this element in case something went wrong
    errorElement: <ErrorBoundary />,
  },
  {
    // it renders this element
    element: <AllFeeds />,
    // when the URL matches this segment
    path: "/homepage",
    // and renders this element in case something went wrong
    errorElement: <ErrorBoundary />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
