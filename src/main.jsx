import React from 'react';
import { createRoot } from 'react-dom';
import './index.css'
import App from './App'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import  Contact  from './pages/Contact';
import Navbar from './components/Navbar';
import { Footer } from './sections';
import Faq from './pages/Faq';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>,
    },
    {
        path: "/contact/",
        element: <Contact />,
      },
      {
        path: "/faq/",
        element: <Faq />,
      },
    
  ]);

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode className="relative mx-1">
        <Navbar/>
      <RouterProvider router={router} />
      <div className="padding-x padding-t pb-8 bg-black">
        <Footer/>
      </div>
    </React.StrictMode>
);