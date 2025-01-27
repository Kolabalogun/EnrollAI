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

import RoleProtected from "@/components/auth/roleProtected";
import ProvidersDetails from "@/pages/organizationflow/providersDetails";
import DraftApplications from "@/pages/healthProvider/draftapplications";
import Organizations from "@/pages/admin/organizations";
import OrganizationDetails from "@/pages/admin/organizationDetails";
import AdminProviders from "@/pages/admin/providers";
import DeclinedApplications from "@/pages/admin/declinedApplications";
import Admins from "@/pages/admin/admins";
import AdminDetails from "@/pages/admin/adminDetails";
import AddAdmin from "@/pages/admin/addAdmin";

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
        element: (
          <RoleProtected allowedRoles={["provider"]}>
            <HealthProviderApplicationForm />{" "}
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/health-provider/applications",
        element: (
          <RoleProtected allowedRoles={["provider"]}>
            <HealthProviderApplications />{" "}
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/health-provider/approved-applications",
        element: (
          <RoleProtected allowedRoles={["provider"]}>
            <HealthProviderActiveApplications />{" "}
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/health-provider/pending-applications",
        element: (
          <RoleProtected allowedRoles={["provider"]}>
            <HealthProviderDraftApplications />{" "}
          </RoleProtected>
        ),
      },

      {
        path: "/dashboard/health-provider/declined-applications",
        element: (
          <RoleProtected allowedRoles={["provider"]}>
            <HealthProviderCompletedApplications />{" "}
          </RoleProtected>
        ),
      },

      {
        path: "/dashboard/health-provider/applications/full-list",
        element: (
          <RoleProtected allowedRoles={["provider"]}>
            <HealthProviderApplicationsFullList />{" "}
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/health-provider/applications/details/:id",
        element: (
          <RoleProtected
            allowedRoles={["provider", "organization", "super_admin"]}
          >
            <HealthProviderApplicationsDetails />{" "}
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/health-provider/profile",
        element: (
          <RoleProtected allowedRoles={["provider"]}>
            <HealthProviderProfile />{" "}
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/health-provider/profile/cahq",
        element: (
          <RoleProtected allowedRoles={["provider"]}>
            <HealthProviderCAHQProfile />{" "}
          </RoleProtected>
        ),
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
        element: (
          <RoleProtected allowedRoles={["organization"]}>
            <CreateApplicationForm />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/credentializing-organization/created-applications",
        element: (
          <RoleProtected allowedRoles={["organization"]}>
            <CreatedApplications />
          </RoleProtected>
        ),
      },
      // {
      //   path: "/dashboard/credentializing-organization/applications/details/:id",
      //   element: (
      //     <RoleProtected allowedRoles={["provider"]}>
      //       <HealthProviderApplicationsDetails />{" "}
      //     </RoleProtected>
      //   ),
      // },
      {
        path: "/dashboard/credentializing-organization/incoming-applications",
        element: (
          <RoleProtected allowedRoles={["organization"]}>
            <IncomingApplications />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/credentializing-organization/all-applications",
        element: (
          <RoleProtected allowedRoles={["organization"]}>
            <AllApplications />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/credentializing-organization/approved-applications",
        element: (
          <RoleProtected allowedRoles={["organization"]}>
            <ApprovedApplications />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/credentializing-organization/providers",
        element: (
          <RoleProtected allowedRoles={["organization"]}>
            <Providers />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/credentializing-organization/providers/details",
        element: (
          <RoleProtected allowedRoles={["organization", "super_admin"]}>
            <ProvidersDetails />
          </RoleProtected>
        ),
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
        path: "/dashboard/admin/all-applications",
        element: (
          <RoleProtected allowedRoles={["super_admin"]}>
            <AllApplications />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/approved-applications",
        element: (
          <RoleProtected allowedRoles={["super_admin"]}>
            <ApprovedApplications />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/declined-applications",
        element: (
          <RoleProtected allowedRoles={["super_admin"]}>
            <DeclinedApplications />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/all",
        element: (
          <RoleProtected allowedRoles={["super_admin"]}>
            <Admins />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/add",
        element: (
          <RoleProtected allowedRoles={["super_admin"]}>
            <AddAdmin />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/pending-applications",
        element: (
          <RoleProtected allowedRoles={["super_admin"]}>
            <DraftApplications />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/organizations",
        element: (
          <RoleProtected allowedRoles={["super_admin"]}>
            <Organizations />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/organizations/details",
        element: (
          <RoleProtected allowedRoles={["super_admin"]}>
            <OrganizationDetails />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/details",
        element: (
          <RoleProtected allowedRoles={["super_admin"]}>
            <AdminDetails />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/providers",
        element: (
          <RoleProtected allowedRoles={["super_admin"]}>
            <AdminProviders />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/providers/details",
        element: (
          <RoleProtected allowedRoles={["organization", "super_admin"]}>
            <ProvidersDetails />
          </RoleProtected>
        ),
      },
      {
        path: "/dashboard/admin/report-analytics",
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
