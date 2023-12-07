import { SignUp } from "./components/Page/Sign/cadastro.tsx";
import SignIn from "./components/Page/Sign/login.tsx";
import LandingPage from "./Page/LandingPage/index.tsx";
import { Prescription } from "./Page/Prescription/index.tsx";
import { Certificate } from "./Page/Certificate/index.tsx";
import { Request } from "./Page/Request/index.tsx";
import { Register } from "./Page/Register/index.tsx";
import { Patients } from "./Page/Patients/index.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DocsAndPrescriptions from "./Page/DocsAndPrescriptions/index.tsx";
import { ListPrescription } from "./Page/ListPrescription/index.tsx";
import { HeaderDefault } from "./components/HeaderCreateAccount/HeaderDefault.tsx";

const generateElementRoute = (element: JSX.Element) => {
  return (
    <>
      <HeaderDefault />
      {element}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: generateElementRoute(<LandingPage />),
  },
  {
    path: "/signup",
    element: generateElementRoute(<SignUp />),
  },
  {
    path: "/signin",
    element: generateElementRoute(<SignIn />),
  },
  {
    path: "/register/:patient_id",
    element: generateElementRoute(<Register />),
  },
  {
    path: "/prescriptions/paciente/:id",
    element: generateElementRoute(<ListPrescription />),
  },
  {
    path: "/prescription/:id",
    element: generateElementRoute(<Prescription />),
  },
  {
    path: "/patients/:id",
    element: generateElementRoute(<Patients />),
  },
  {
    path: "/certificate/:id",
    element: generateElementRoute(<Certificate />),
  },
  {
    path: "/request/:id",
    element: generateElementRoute(<Request />),
  },
  {
    path: "/docs/paciente/:id",
    element: generateElementRoute(<DocsAndPrescriptions />),
  },
]);

const RoutesPages = () => <RouterProvider router={router} />;

export default RoutesPages;
