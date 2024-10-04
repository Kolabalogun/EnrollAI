import OrganizationApplicationLists from "@/components/pages/applications/organization";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const CompletedApplications = () => {
  return (
    <ApplicationsPageLayout title="Completed Applications">
      <OrganizationApplicationLists />
    </ApplicationsPageLayout>
  );
};

export default CompletedApplications;
