import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import OrdersCancelled from "../Pages/Orders/OrdersCancelled";
import OrdersDelivered from "../Pages/Orders/OrdersDelivered";
import OrdersPickedup from "../Pages/Orders/OrdersPickedup";
import OrdersProcessing from "../Pages/Orders/OrdersProcessing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // orders route
      {
        path: "/ordersprocessing",
        element: <OrdersProcessing></OrdersProcessing>,
      },
      {
        path: "/orderspickedup",
        element: <OrdersPickedup></OrdersPickedup>,
      },
      {
        path: "/ordersdelivered",
        element: <OrdersDelivered></OrdersDelivered>,
      },
      {
        path: "/orderscancelled",
        element: <OrdersCancelled></OrdersCancelled>,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Page</p>,
  },
]);
