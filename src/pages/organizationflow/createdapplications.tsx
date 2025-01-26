/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import showToast from "@/components/common/showtoast";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { createdApplicationsHeader } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";
import { getCreatedApplications } from "@/services/org/applications";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CreatedApplications = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApplications = async () => {
    setIsLoading(true);
    try {
      const res = await getCreatedApplications();
      console.log(res);
      if (res.success) {
        setData(res?.data?.applications || []);
        setFilteredData(res?.data?.applications || []);
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
      (item: any) =>
        item.applicationTitle.toLowerCase().includes(lowercasedValue) ||
        item.applicationName.toLowerCase().includes(lowercasedValue)
    );

    setFilteredData(filtered);
  };
  return (
    <ApplicationsPageLayout
      title="Created Applications"
      handleSearch={handleSearch}
      headers={createdApplicationsHeader}
      filteredData={filteredData || []}
    >
      <OrganizationApplicationLists
        data={filteredData || []}
        fetchFunction={fetchApplications}
        title="Created Applications"
        isLoading={isLoading}
      />
    </ApplicationsPageLayout>
  );
};

export default CreatedApplications;
