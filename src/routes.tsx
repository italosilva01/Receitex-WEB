import { SignUp } from "./components/Page/Sign/cadastro.tsx";
import SignIn from "./components/Page/Sign/login.tsx";
import LandingPage from "./Page/LandingPage/index.tsx";
import { Prescription } from "./Page/Prescription/index.tsx";
import { Certificate } from "./Page/Certificate/index.tsx";
import { Request } from "./Page/Request/index.tsx";
import { Register } from "./Page/Register/index.tsx";
import { Patients } from "./Page/Patients/index.tsx";
import { HomePatients } from "./Page/HomePatients/index.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DocsAndPrescriptions from "./Page/DocsAndPrescriptions/index.tsx";
import { ListPrescription } from "./Page/ListPrescription/index.tsx";

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
    path: "/register/:patient_id",
    element: <Register  />,
  },
  {
    path: "/patients/:id",
    element: <Patients />,
  },
  {
    path: "/prescriptions/paciente/:id",
    element: <ListPrescription />,
  },
  {
    path: "/prescription/:id",
    element: <Prescription />,
  },
  {
    path: "/patients/:id",
    element: <Patients />,
  },
  {
    path: "/certificate/:id",
    element: <Certificate />,
  },
  {
    path: "/request/:id",
    element: <Request />,
  },
  {
    path: "/docs/:id",
    element: <DocsAndPrescriptions />,
  },
  {
    path: '/home/patient',
    element: <HomePatients />,
  },
]);

const RoutesPages = () => <RouterProvider router={router} />;

export default RoutesPages;
