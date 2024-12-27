import OrganizationApplicationLists from "@/components/pages/applications/organization";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const CreatedApplications = () => {
  return (
    <ApplicationsPageLayout title="Created Applications">
      <OrganizationApplicationLists />
    </ApplicationsPageLayout>
  );
};

export default CreatedApplications;
