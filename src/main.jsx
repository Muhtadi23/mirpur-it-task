import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import NewsDetails from './components/NewsDetails/NewsDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>
      },
      {
        path: "/newsdetails/:title",
        element: <NewsDetails></NewsDetails>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
