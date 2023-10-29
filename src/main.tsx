import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesPages from "./routes";
import { HeaderDefault } from "./components/HeaderCreateAccount/HeaderDefault";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HeaderDefault />
      <RoutesPages />
    </QueryClientProvider>
  </React.StrictMode>
);
