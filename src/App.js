import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthContext/AuthProvider";
import BusinessProvider from "./Contexts/BusinessContext/BusinessProvider";
import CustomerProvider from "./Contexts/CustomerContext/CustomerProvider";
import DeliveryProvider from "./Contexts/DeliveryContext/DeliveryProvider";
import OrdersProvider from "./Contexts/OrdersContext/OrdersProvider";
import WarehouseProvider from "./Contexts/WarehouseContext/WarehouseProvider";
import { router } from "./Routes/Routes";

function App() {
  const Router = router;
  return (
    <AuthProvider>
      <OrdersProvider>
        <DeliveryProvider>
          <BusinessProvider>
            <CustomerProvider>
              <WarehouseProvider>
                <div className="h-screen">
                  <RouterProvider router={Router}></RouterProvider>
                </div>
              </WarehouseProvider>
            </CustomerProvider>
          </BusinessProvider>
        </DeliveryProvider>
      </OrdersProvider>
    </AuthProvider>
  );
}

export default App;
