import OrganizationApplicationLists from "@/components/pages/applications/organization";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const ActiveApplications = () => {
  return (
    <ApplicationsPageLayout title="Active Applications">
      <OrganizationApplicationLists />
    </ApplicationsPageLayout>
  );
};

export default ActiveApplications;
