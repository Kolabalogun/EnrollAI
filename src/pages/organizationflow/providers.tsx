import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { headers } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const Providers = () => {
  return (
    <ApplicationsPageLayout
      handleSearch={() => console.log("")}
      headers={headers}
      filteredData={[]}
      title="Providers"
    >
      <OrganizationApplicationLists
        data={[]}
        fetchFunction={() => console.log("")}
      />
    </ApplicationsPageLayout>
  );
};

export default Providers;
