import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { headers } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";

const ApprovedApplications = () => {
  return (
    <ApplicationsPageLayout
      handleSearch={() => console.log("")}
      headers={headers}
      filteredData={[]}
      title="Approved Applications"
    >
      <OrganizationApplicationLists
        data={[]}
        fetchFunction={() => console.log("")}
        // isLoading={isLoading}
      />
    </ApplicationsPageLayout>
  );
};

export default ApprovedApplications;
