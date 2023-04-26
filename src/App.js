import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import AuthContextProvider, { AuthContext } from "./context/auth-context";
import Login from "./pages/Login";
import { useContext, useEffect } from "react";
import Homepage from "./pages/HomePage";
import LayoutLeft from "./components/LayoutLeft";
import LayoutRight from "./components/LayoutRight";
import TopNavigation from "./components/TopNavigation";
import Followers from "./components/Followers";

const NonAuthRoot = () => {
  const authCtx = useContext(AuthContext);
  if (authCtx.isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Login />;
};

const Root = () => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <TopNavigation />
      <div style={{ display: "flex" }}>
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
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/home", element: <Homepage /> },
      { path: "/followers", element: <Followers /> },
    ],
  },
  { path: "/login", element: <NonAuthRoot /> },
  // {
  //   path: "/*",
  //   element: <Navigate to="/" />,
  // },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
