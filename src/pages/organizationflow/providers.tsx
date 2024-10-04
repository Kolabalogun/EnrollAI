import OrganizationApplicationLists from "@/components/pages/applications/organization";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const Providers = () => {
  return (
    <ApplicationsPageLayout title="Providers">
      <OrganizationApplicationLists />
    </ApplicationsPageLayout>
  );
};

export default Providers;
