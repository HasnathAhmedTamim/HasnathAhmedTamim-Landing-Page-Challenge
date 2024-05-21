import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Products from './pages/Products.jsx';
import Features from './pages/Features.jsx';
import Reviews from './pages/Reviews.jsx';
import Contact from './pages/Contact.jsx';
import CartList from './components/CartList/CartList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/contactus",
        element: <Contact></Contact>,
      },
      {
        path: "/shoppingcart",
        element: <CartList></CartList>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
// max-w-screen-2xl mx-auto