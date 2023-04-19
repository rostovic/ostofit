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
import LayoutLeft from "./components/LayoutLeft";
import LayoutRight from "./components/LayoutRight";

const Root = () => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    // root div
    <div style={{ height: "100%", display: "flex" }}>
      <LayoutLeft />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "1000px", backgroundColor: "#fafafa" }}>
          <Outlet />
        </div>
      </div>
      <LayoutRight />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Root />,
    children: [{ path: "/home", element: <Homepage /> }],
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
