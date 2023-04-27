import {
  Link,
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import "./App.css";
import AuthContextProvider, { AuthContext } from "./context/auth-context";
import { useContext, useEffect } from "react";
import LayoutLeft from "./components/LayoutLeft";
import LayoutRight from "./components/LayoutRight";
import TopNavigation from "./components/TopNavigation";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Followers from "./components/Followers";

export const MainLayout = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  useEffect(() => {
    if(pathname === "/") {
      navigate("home")
    }

  }, [pathname])
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

const UserPage = () => {
  const { id } = useParams();
  return (
    <div>
      User id: {id} <br />
    </div>
  );
};

const nonAuthRouter = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/otherRoute",
    element: (
      <div>
        <div>Some random non auth page.</div>
        <Link to={"/"}>To login</Link>
      </div>
    ),
  },
  { path: "/*", element: <Navigate to="login" /> },
]);

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "home/page1",
        element: <div>Page 1</div>,
      },
      {
        path: "followers",
        element: <Followers />,
      },
      {
        path: "followers/:id/",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="home" />,
  },
]);

const Root = () => {
  const authCtx = useContext(AuthContext);
  let router;

  if (authCtx.isLoadingUserData) {
    return;
  }

  if (!authCtx.isLoggedIn) {
    router = nonAuthRouter;
  } else {
    router = authRouter;
  }

  return <RouterProvider router={router} />;
};

const App = () => {
  return (
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  );
};

export default App;
