import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Header from "./headerfooter/Header";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import AuthContextProvider, { AuthContext } from "./context/auth-context";
import { useContext } from "react";

const Kek = () => {
  console.log("kek");
  return redirect("/dashboard/kurac");
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <Kek />,
    children: [
      {
        path: "/dashboard/kurac",
        element: <Dashboard />,
      },
    ],
  },
  ,
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<HomePage />}>
//       <Route path="dashboard" element={<Dashboard />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
