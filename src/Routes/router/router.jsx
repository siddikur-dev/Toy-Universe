import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Register from "../../Component/AuthRegLogin/Register/Register";
import Login from "../../Component/AuthRegLogin/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ToyCardDetails from "../../Component/Toys/ToyCardDetails/ToyCardDetails";
import Feature from "../../Pages/Feature/Feature";
import ResetPass from "../../Component/AuthRegLogin/ResetPass/ResetPass";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import AllToys from "../../Component/Toys/AllToys";
import AllToy from "../../Component/Toys/AllToy";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/all-toys",
        Component: AllToy,
      },
      {
        path: "/toy-details/:id",
        element: <ToyCardDetails />,
      },

      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/reset-password",
        Component: ResetPass,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/feature",
        element: <Feature />,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
