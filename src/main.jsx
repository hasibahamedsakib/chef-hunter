import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./Provider/AuthProvider";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
