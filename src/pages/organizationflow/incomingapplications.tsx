import OrganizationApplicationLists from "@/components/pages/applications/organization";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const IncomingApplications = () => {
  return (
    <ApplicationsPageLayout title="Incoming Applications">
      <OrganizationApplicationLists />
    </ApplicationsPageLayout>
  );
};

export default IncomingApplications;
