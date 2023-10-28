import SignUp from "./components/Page/Sign/cadastro.tsx";
import SignIn from "./components/Page/Sign/login.tsx";
import LandingPage from "./Page/LandingPage/index.tsx";
import { Register } from "./Page/register/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const RoutesPages = () => <RouterProvider router={router} />;

export default RoutesPages;