import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ChefDetails from "../components/Chef/ChefDetails/ChefDetails";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error from "../pages/Error/Error";
import Main from "../pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "chef/:id",
        element: (
          <PrivetRoute>
            <ChefDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://chef-hunter-server-rho.vercel.app/chef/${params.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
