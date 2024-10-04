import OrganizationApplicationLists from "@/components/pages/applications/organization";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const DraftApplications = () => {
  return (
    <ApplicationsPageLayout title="Draft Applications">
      <OrganizationApplicationLists />
    </ApplicationsPageLayout>
  );
};

export default DraftApplications;
