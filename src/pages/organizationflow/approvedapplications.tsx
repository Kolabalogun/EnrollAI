import OrganizationApplicationLists from "@/components/pages/applications/organization";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const ApprovedApplications = () => {
  return (
    <ApplicationsPageLayout title="Approved Applications">
      <OrganizationApplicationLists />
    </ApplicationsPageLayout>
  );
};

export default ApprovedApplications;
