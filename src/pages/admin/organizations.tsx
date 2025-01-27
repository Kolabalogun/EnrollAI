/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import showToast from "@/components/common/showtoast";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { organizationHeader } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";
import { Organization } from "@/lib/types";
import { RootState } from "@/redux/store";
import { getAllOrganizations } from "@/services/admin/applications";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Organizations = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);

  const fetchOrganizations = async (page: number = 1, size: number = 10) => {
    setIsLoading(true);
    try {
      const res = await getAllOrganizations(page, size);
      console.log(res);
      if (res.success) {
        setData(res?.data?.data);
        setFilteredData(res?.data?.data);
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
    if (user?.accountType === "super_admin") {
      fetchOrganizations(currentPage, itemsPerPage);
    }
  }, [user, currentPage]);

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
        fetchFunction={fetchOrganizations}
        isLoading={isLoading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </ApplicationsPageLayout>
  );
};

export default Organizations;
