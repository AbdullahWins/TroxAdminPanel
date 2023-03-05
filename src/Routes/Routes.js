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
import OrdersPending from "../Pages/Orders/OrdersPending";
import OrdersProcessing from "../Pages/Orders/OrdersProcessing";
import WarehouseAll from "../Pages/Warehouse/WarehouseAll";
import WarehouseAddNew from "../Pages/Warehouse/WarehouseAddNew";
import StaffAll from "../Pages/Staff/StaffAll";
import StaffAddNew from "../Pages/Staff/StaffAddNew";
import TransactionPendingWithdraw from "../Pages/Transaction/TransactionPendingWithdraw";
import TransactionUnsettledBalance from "../Pages/Transaction/TransactionUnsettledBalance";
import TransactionRevenue from "../Pages/Transaction/TransactionRevenue";
import CustomerAll from "../Pages/Customer/CustomerAll";
import CustomerBlocked from "../Pages/Customer/CustomerBlocked";
import CustomerProcessing from "../Pages/Customer/CustomerProcessing";
import UserProfile from "../Pages/User/UserProfile";
import DeliveryCancelled from "../Pages/DeliveryMan/DeliveryCancelled";
import LocationsCountry from "../Pages/Locations/LocationsCountry";
import LocationsCity from "../Pages/Locations/LocationsCity";
import LocationsState from "../Pages/Locations/LocationsState";
import StaffRole from "../Pages/Staff/StaffRole";
import Lalala from "../Components/Tables/Lalala";

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
        path: "/orderspending",
        element: <OrdersPending></OrdersPending>,
      },
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
      {
        path: "/deliveryCancelled",
        element: <DeliveryCancelled></DeliveryCancelled>,
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
        path: "/locationsCountry",
        element: <LocationsCountry></LocationsCountry>,
      },
      {
        path: "/locationsState",
        element: <LocationsState></LocationsState>,
      },
      {
        path: "/locationsCity",
        element: <LocationsCity></LocationsCity>,
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
      {
        path: "/staffRole",
        element: <StaffRole></StaffRole>,
      },
      {
        path: "/lala",
        element: <Lalala></Lalala>,
      },
    ],
  },
  {
    path: "/userProfile",
    element: <UserProfile></UserProfile>,
  },
  {
    path: "*",
    element: <p>404 Page</p>,
  },
]);
