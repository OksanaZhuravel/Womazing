import { createBrowserRouter } from 'react-router-dom';
import { RoutePath } from './paths';

import Layout from '../pages/Layout';
import Home from '../pages/Home';
import AboutBrand from '../pages/AboutBrand';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import Shop from '../pages/Home';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: RoutePath.ABOUTBRAND,
        element: <AboutBrand />,
      },
      {
        path: RoutePath.CART,
        element: <Cart />,
      },
      {
        path: RoutePath.CONTACT,
        element: <Contact />,
      },
      {
        path: RoutePath.SHOP,
        element: <Shop />,
      },
    ],
  },
]);
