import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ChefDetails from "../components/Chef/ChefDetails/ChefDetails";
import Home from "../components/Home/Home";
import LatestRecipes from "../components/LatestRecipes/LatestRecipes";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Main from "../pages/Main/Main";
import SavedRecipes from "../pages/SavedRecipes/SavedRecipes";

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
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "latest-recipes",
        element: <LatestRecipes />,
      },
      {
        path: "saved-recipes",
        element: <SavedRecipes />,
      },
      {
        path: "contact",
        element: (
          <PrivetRoute>
            <Contact />{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "pages",
        element: <></>,
      },
    ],
  },
]);

export default router;
