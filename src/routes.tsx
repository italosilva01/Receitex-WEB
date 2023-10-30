import SignUp from "./components/Page/Sign/cadastro.tsx";
import SignIn from "./components/Page/Sign/login.tsx";
import LandingPage from "./Page/LandingPage/index.tsx";
import { Prescription } from "./Page/Prescription/index.tsx";
import { Register } from "./Page/Register/index.tsx";
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
  {
    path: "/prescription/:id",
    element: <Prescription />,
  }
]);

const RoutesPages = () => <RouterProvider router={router} />;

export default RoutesPages;
