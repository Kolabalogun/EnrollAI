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
  GetStated,
} from "../pages";
import { Protected, UnAuthenticated } from "@/components/auth";
import {
  HealthProviderApplicationForm,
  HealthProviderKeyFeatures,
} from "@/pages/healthProvider";

// Lazy-loading components
const Home = lazy(() => import("../pages/home"));
// const Dashboard = lazy(() => import("../pages/dashboard"));

const HealthProviderDashboard = lazy(
  () => import("../pages/healthProvider/dashboard")
);

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
    path: "/health-provider-dashboard",
    element: (
      // Protected route for authenticated users
      <Suspense fallback={<Loader />}>
        <Protected>
          <Root />
        </Protected>
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/health-provider-dashboard",
        element: <HealthProviderDashboard />,
      },
      {
        path: "/health-provider-dashboard/application-form",
        element: <HealthProviderApplicationForm />,
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
    path: "/getstated",
    element: (
      <Protected>
        <GetStated />
      </Protected>
    ),
  },
  {
    path: "/healthcare-provider-keyfeatures",
    element: (
      <Protected>
        <HealthProviderKeyFeatures />
      </Protected>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
