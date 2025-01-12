import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { headers } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const AdminProviders = () => {
  return (
    <ApplicationsPageLayout
      handleSearch={() => console.log("")}
      headers={headers}
      filteredData={[]}
      title="Incoming Applications"
    >
      <OrganizationApplicationLists
        data={[]}
        fetchFunction={() => console.log("")}
      />
    </ApplicationsPageLayout>
  );
};

export default AdminProviders;
