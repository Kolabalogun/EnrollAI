/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import showToast from "@/components/common/showtoast";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { createdApplicationsHeader } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";
import { RootState } from "@/redux/store";
import { getCreatedApplications } from "@/services/org/applications";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CreatedApplications = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const toast = useToast();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);

  const fetchApplications = async (page: number = 1, size: number = 10) => {
    setIsLoading(true);
    try {
      const res = await getCreatedApplications(page, size);
      console.log(res);
      if (res.success) {
        setData(res?.data?.applications || []);
        setFilteredData(res?.data?.applications || []);
        setTotalPages(res?.data?.pagination?.totalPages);
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
    if (user) fetchApplications(currentPage, itemsPerPage);
  }, [currentPage, user]);

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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </ApplicationsPageLayout>
  );
};

export default CreatedApplications;
