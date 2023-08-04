import { createBrowserRouter } from 'react-router-dom';
import { RoutePath } from './paths';

import Layout from '../pages/Layout';
import Home from '../pages/Home';
import AboutBrand from '../pages/AboutBrand';
import Cart from '../pages/Cart';
import Shop from '../pages/Shop';
import Contacts from '../pages/Contacts';
import OneProduct from '../pages/OneProduct';

const routerConfig = createBrowserRouter([
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
        path: RoutePath.CONTACTS,
        element: <Contacts />,
      },
      {
        path: RoutePath.SHOP,
        element: <Shop />,
      },
      {
        path: RoutePath.ONEPRODUCT,
        element: <OneProduct />,
      }
    ],
  },
]);

export default routerConfig;
