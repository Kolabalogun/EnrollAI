/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "../components/common";
import ErrorPage from "../pages/error";
import {
  CreateNewPassword,
  ForgetPassword,
  Login,
  PageNotFound,
  Root,
  VerifyEmail,
  ChooseTypeOfRegisteration,
  Register,
} from "../pages";
import { UnAuthenticated } from "@/components/auth";

// Lazy-loading components
const Home = lazy(() => import("../pages/home"));
const Dashboard = lazy(() => import("../pages/dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      // Protected route for authenticated users
      <Suspense fallback={<Loader />}>
        {/* <Protected> */}
        <Root />
        {/* </Protected> */}
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/register",
    element: (
      // Unauthenticated route for users who are not logged in
      <UnAuthenticated>
        <Register />
      </UnAuthenticated>
    ),
  },

  {
    path: "/choose-type-of-reg",
    element: (
      // Unauthenticated route for users who are not logged in
      <UnAuthenticated>
        <ChooseTypeOfRegisteration />
      </UnAuthenticated>
    ),
  },
  {
    path: "/verifyemail",
    element: (
      // Unauthenticated route for users who are not logged in
      <UnAuthenticated>
        <VerifyEmail />
      </UnAuthenticated>
    ),
  },
  {
    path: "/login",
    element: (
      // Unauthenticated route for users who are not logged in
      <UnAuthenticated>
        <Login />
      </UnAuthenticated>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      // Unauthenticated route for users who are not logged in
      <UnAuthenticated>
        <ForgetPassword />
      </UnAuthenticated>
    ),
  },
  {
    path: "/create-new-password",
    element: (
      // Unauthenticated route for users who are not logged in
      <UnAuthenticated>
        <CreateNewPassword />
      </UnAuthenticated>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
