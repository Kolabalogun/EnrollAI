/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import showToast from "@/components/common/showtoast";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { providersHeaders } from "@/constant/data/headers";

import ApplicationsPageLayout from "@/layout/applicationsPage";
import { RootState } from "@/redux/store";
import { getApprovedProviders } from "@/services/org/applications";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Providers = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(filteredData);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);

  console.log(totalPages);
  console.log(data);

  const fetchProviders = async (page: number = 1, size: number = 10) => {
    if (!user) return;
    setIsLoading(true);
    try {
      const res = await getApprovedProviders(user?.id, page, size);

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
    if (user?.accountType === "organization") {
      fetchProviders(currentPage, itemsPerPage);
    }
  }, [user, currentPage]);

  const handleSearch = (value: string) => {
    const lowercasedValue = value.toLowerCase();

    const filtered = data.filter(
      (item: any) =>
        item.provider.fullName.toLowerCase().includes(lowercasedValue) ||
        item.provider.email.toLowerCase().includes(lowercasedValue)
    );

    setFilteredData(filtered);
  };
  return (
    <ApplicationsPageLayout
      handleSearch={handleSearch}
      headers={providersHeaders}
      filteredData={filteredData || []}
      title="Providers"
    >
      <OrganizationApplicationLists
        data={filteredData || []}
        fetchFunction={fetchProviders}
        isLoading={isLoading}
        title="Providers"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </ApplicationsPageLayout>
  );
};

export default Providers;
