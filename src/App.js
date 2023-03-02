import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthContext/AuthProvider";
import { router } from "./Routes/Routes";

function App() {
  const Router = router;
  return (
    <AuthProvider>
      <div className="h-screen">
        <RouterProvider router={Router}></RouterProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
