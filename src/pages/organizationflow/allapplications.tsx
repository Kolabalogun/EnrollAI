import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { headers } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const AllApplications = () => {
  return (
    <ApplicationsPageLayout
      handleSearch={() => console.log("")}
      headers={headers}
      filteredData={[]}
      title="All Applications"
    >
      <OrganizationApplicationLists
        data={[]}
        fetchFunction={() => console.log("")}
      />
    </ApplicationsPageLayout>
  );
};

export default AllApplications;
