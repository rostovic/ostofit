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
import TopNavigation from "./components/TopNavigation";
import Test from "./components/Test";

const Root = () => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    // root div
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/home", element: <Homepage /> },
      { path: "/random", element: <Test /> },
    ],
  },

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
