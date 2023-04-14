import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AuthContextProvider, { AuthContext } from "./context/auth-context";
import Login from "./pages/Login";
import { useContext } from "react";
import Homepage from "./pages/HomePage";

const Root = () => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return <Login />;
  }

  return (
    <div
      style={{
        height: "100vh",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Homepage /> }],
  },

  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
