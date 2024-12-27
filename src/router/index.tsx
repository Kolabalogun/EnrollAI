/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "../components/common";

import {
  CreateNewPassword,
  ForgetPassword,
  Login,
  PageNotFound,
  Root,
  VerifyEmail,
  ChooseTypeOfRegisteration,
  GetStated,
  KeyFeatures,
  ErrorPage,
  Notifications,
  HelpCenter,
  Articles,
} from "../pages";
import { Protected, UnAuthenticated } from "@/components/auth";
import {
  HealthProviderApplicationForm,
  HealthProviderApplications,
  HealthProviderApplicationsFullList,
  HealthProviderApplicationsDetails,
  HealthProviderProfile,
  HealthProviderCAHQProfile,
  HealthProviderSettings,
  HealthProviderAddBillingPayment,
  HealthProviderRegister,
  HealthProviderActiveApplications,
  HealthProviderDraftApplications,
  HealthProviderCompletedApplications,
} from "@/pages/healthProvider";
import {
  AllApplications,
  ApprovedApplications,
  CreateApplicationForm,
  IncomingApplications,
  OrganizationLogin,
  OrganizationRegister,
  Providers,
  ReportAndAnalytics,
} from "@/pages/organizationflow";
import CreatedApplications from "@/pages/organizationflow/createdapplications";

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
        <Protected>
          <Root />
        </Protected>
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/health-provider/application-form",
        element: <HealthProviderApplicationForm />,
      },
      {
        path: "/dashboard/health-provider/applications",
        element: <HealthProviderApplications />,
      },
      {
        path: "/dashboard/health-provider/active-applications",
        element: <HealthProviderActiveApplications />,
      },
      {
        path: "/dashboard/health-provider/draft-applications",
        element: <HealthProviderDraftApplications />,
      },

      {
        path: "/dashboard/health-provider/completed-applications",
        element: <HealthProviderCompletedApplications />,
      },

      {
        path: "/dashboard/health-provider/applications/full-list",
        element: <HealthProviderApplicationsFullList />,
      },
      {
        path: "/dashboard/health-provider/applications/details/:id",
        element: <HealthProviderApplicationsDetails />,
      },
      {
        path: "/dashboard/health-provider/profile",
        element: <HealthProviderProfile />,
      },
      {
        path: "/dashboard/health-provider/profile/cahq",
        element: <HealthProviderCAHQProfile />,
      },
      {
        path: "/dashboard/health-provider/notifications",
        element: <Notifications />,
      },
      {
        path: "/dashboard/health-provider/helpcenter",
        element: <HelpCenter />,
      },
      {
        path: "/dashboard/settings",
        element: <HealthProviderSettings />,
      },
      {
        path: "/dashboard/health-provider/settings/billing-add-payment",
        element: <HealthProviderAddBillingPayment />,
      },
    ],
  },
  {
    path: "/dashboard",
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
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/dashboard/credentializing-organization/create-application-form",
        element: <CreateApplicationForm />,
      },
      {
        path: "/dashboard/credentializing-organization/created-applications",
        element: <CreatedApplications />,
      },
      {
        path: "/dashboard/credentializing-organization/incoming-applications",
        element: <IncomingApplications />,
      },
      {
        path: "/dashboard/credentializing-organization/all-applications",
        element: <AllApplications />,
      },
      {
        path: "/dashboard/credentializing-organization/approved-applications",
        element: <ApprovedApplications />,
      },
      {
        path: "/dashboard/credentializing-organization/providers",
        element: <Providers />,
      },
      {
        path: "/dashboard/credentializing-organization/notifications",
        element: <Notifications />,
      },
      {
        path: "/dashboard/credentializing-organization/help-center",
        element: <HelpCenter />,
      },
      {
        path: "/dashboard/articles",
        element: <Articles />,
      },
      {
        path: "/dashboard/settings",
        element: <HealthProviderSettings />,
      },
      {
        path: "/dashboard/credentializing-organization/report-analytics",
        element: <ReportAndAnalytics />,
      },
    ],
  },
  {
    path: "/health-provider-register",
    element: (
      // Unauthenticated route for users who are not logged in
      <UnAuthenticated>
        <HealthProviderRegister />
      </UnAuthenticated>
    ),
  },

  {
    path: "/credentializing-organization-register",
    element: (
      // Unauthenticated route for users who are not logged in
      <UnAuthenticated>
        <OrganizationRegister />
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
    path: "/organization/login",
    element: (
      // Unauthenticated route for users who are not logged in
      <UnAuthenticated>
        <OrganizationLogin />
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
    path: "/getstarted",
    element: (
      <Protected>
        <GetStated />
      </Protected>
    ),
  },
  {
    path: "/keyfeatures",
    element: (
      <Protected>
        <KeyFeatures />
      </Protected>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
