import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import DeliveryAddNew from "../Pages/DeliveryMan/DeliveryAddNew";
import DeliveryBlocked from "../Pages/DeliveryMan/DeliveryBlocked";
import DeliveryAllDeliveryMan from "../Pages/DeliveryMan/DeliveryAllDeliveryMan";
import DeliveryPendingRequests from "../Pages/DeliveryMan/DeliveryPendingRequests";
import Home from "../Pages/Home/Home";
import OrdersCancelled from "../Pages/Orders/OrdersCancelled";
import OrdersDelivered from "../Pages/Orders/OrdersDelivered";
import OrdersPickedup from "../Pages/Orders/OrdersPickedup";
import OrdersProcessing from "../Pages/Orders/OrdersProcessing";
import WarehouseAll from "../Pages/Warehouse/WarehouseAll";
import WarehouseAddNew from "../Pages/Warehouse/WarehouseAddNew";
import StaffAll from "../Pages/Staff/StaffAll";
import StaffAddNew from "../Pages/Staff/StaffAddNew";
import TransactionPendingWithdraw from "../Pages/Transaction/TransactionPendingWithdraw";
import TransactionUnsettledBalance from "../Pages/Transaction/TransactionUnsettledBalance";
import TransactionRevenue from "../Pages/Transaction/TransactionRevenue";
import LocationsAddNew from "../Pages/Locations/LocationsAddNew";
import CustomerAll from "../Pages/Customer/CustomerAll";
import CustomerBlocked from "../Pages/Customer/CustomerBlocked";
import CustomerProcessing from "../Pages/Customer/CustomerProcessing";

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

      // delivery man
      {
        path: "/deliveryPendingRequests",
        element: <DeliveryPendingRequests></DeliveryPendingRequests>,
      },
      {
        path: "/deliveryAllDeliveryMan",
        element: <DeliveryAllDeliveryMan></DeliveryAllDeliveryMan>,
      },
      {
        path: "/deliveryAddNew",
        element: <DeliveryAddNew></DeliveryAddNew>,
      },
      {
        path: "/deliveryBlocked",
        element: <DeliveryBlocked></DeliveryBlocked>,
      },

      // customer
      {
        path: "/customerAll",
        element: <CustomerAll></CustomerAll>,
      },
      {
        path: "/customerBlocked",
        element: <CustomerBlocked></CustomerBlocked>,
      },
      {
        path: "/customerProcessing",
        element: <CustomerProcessing></CustomerProcessing>,
      },

      // location
      {
        path: "/locationsAddNew",
        element: <LocationsAddNew></LocationsAddNew>,
      },

      // transaction
      {
        path: "/transactionPendingWithdraw",
        element: <TransactionPendingWithdraw></TransactionPendingWithdraw>,
      },
      {
        path: "/transactionUnsettledBalance",
        element: <TransactionUnsettledBalance></TransactionUnsettledBalance>,
      },
      {
        path: "/transactionRevenue",
        element: <TransactionRevenue></TransactionRevenue>,
      },

      // warehouse
      {
        path: "/warehouseAll",
        element: <WarehouseAll></WarehouseAll>,
      },
      {
        path: "/warehouseAddNew",
        element: <WarehouseAddNew></WarehouseAddNew>,
      },

      // staff
      {
        path: "/staffAll",
        element: <StaffAll></StaffAll>,
      },
      {
        path: "/staffAddNew",
        element: <StaffAddNew></StaffAddNew>,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Page</p>,
  },
]);
