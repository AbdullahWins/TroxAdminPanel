import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthContext/AuthProvider";
import OrdersProvider from "./Contexts/OrdersContext/OrdersProvider";
import { router } from "./Routes/Routes";

function App() {
  const Router = router;
  return (
    <AuthProvider>
      <OrdersProvider>
        <div className="h-screen">
          <RouterProvider router={Router}></RouterProvider>
        </div>
      </OrdersProvider>
    </AuthProvider>
  );
}

export default App;
