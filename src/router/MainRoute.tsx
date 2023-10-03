import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Heropage from "../pages/Heropage";

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
    element: <Heropage />,
  },
]);
