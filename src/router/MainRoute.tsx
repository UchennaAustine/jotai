import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import LandingPage from "../pages/LandingPage";
import Layout from "../components/common/Layout";

export const MainRoute = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);
