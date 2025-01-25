/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import showToast from "@/components/common/showtoast";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { organizationHeader } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";
import { Organization } from "@/lib/types";
import { getAOrganizations } from "@/services/admin/applications";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Organizations = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchApplications = async () => {
    setIsLoading(true);
    try {
      const res = await getAOrganizations();
      console.log(res);
      if (res.success) {
        setData(res?.data?.data);
        setFilteredData(res?.data?.data);
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to fetch Application"}`
      );
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchApplications();
  }, []);

  const handleSearch = (value: string) => {
    const lowercasedValue = value.toLowerCase();

    const filtered = data.filter(
      (item: Organization) =>
        item.workEmail.toLowerCase().includes(lowercasedValue) ||
        item.organizationName.toLowerCase().includes(lowercasedValue) ||
        item.administratorFullName.toLowerCase().includes(lowercasedValue)
    );

    setFilteredData(filtered);
  };
  return (
    <ApplicationsPageLayout
      handleSearch={handleSearch}
      headers={organizationHeader}
      filteredData={filteredData || []}
      title="Organizations"
    >
      <OrganizationApplicationLists
        data={filteredData || []}
        title="Organizations"
        fetchFunction={fetchApplications}
        isLoading={isLoading}
      />
    </ApplicationsPageLayout>
  );
};

export default Organizations;
