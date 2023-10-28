import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesPages from "./routes";
import { HeaderDefault } from "./components/HeaderCreateAccount/HeaderDefault";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeaderDefault />
    <RoutesPages />
  </React.StrictMode>
);
