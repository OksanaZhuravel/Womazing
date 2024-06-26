import { createBrowserRouter } from "react-router-dom"
import { RoutePath } from "./paths"

import Layout from "../pages/Layout"
import Home from "../pages/Home"
import AboutBrand from "../pages/AboutBrand"
import Shop from "../pages/Shop"
import Contacts from "../pages/Contacts"
import Product from "../pages/Product"
import Checkout from "../pages/Checkout"
import Success from "../pages/Success"
import Cart from "../pages/Cart"
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      {
        path: "",
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
        path: RoutePath.CHECKOUT,
        element: <Checkout />,
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
        path: RoutePath.PRODUCT,
        element: <Product />,
      },
      {
        path: RoutePath.SUCCESS,
        element: <Success />,
      },
    ],
  },
])

export default routerConfig
