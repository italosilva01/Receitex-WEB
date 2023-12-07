import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesPages from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RoutesPages />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
