import OrganizationApplicationLists from "@/components/pages/applications/organization";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const AllApplications = () => {
  return (
    <ApplicationsPageLayout title="All Applications">
      <OrganizationApplicationLists />
    </ApplicationsPageLayout>
  );
};

export default AllApplications;
