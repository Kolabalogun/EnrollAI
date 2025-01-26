/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import showToast from "@/components/common/showtoast";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { headers } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";
import { RootState } from "@/redux/store";
import { getUsersApplicationsByStatus } from "@/services/applications";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CompletedApplications = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);
  const fetchApplications = async (page: number = 1, size: number = 10) => {
    if (!user) return;

    setIsLoading(true);
    try {
      const res = await getUsersApplicationsByStatus(
        user?.userId,
        "declined",
        page,
        size
      );
      console.log(res);
      if (res.success) {
        setData(res?.data?.applications);
        setTotalPages(res?.data?.pagination?.totalPages);
      }
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to fetch Application"}`
      );
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (user) fetchApplications(currentPage, itemsPerPage);
  }, [user, currentPage]);
  return (
    <ApplicationsPageLayout
      handleSearch={() => console.log("")}
      headers={headers}
      title="Declined Applications"
      filteredData={data}
    >
      <OrganizationApplicationLists
        data={data}
        fetchFunction={fetchApplications}
        isLoading={isLoading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </ApplicationsPageLayout>
  );
};

export default CompletedApplications;
