/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import showToast from "@/components/common/showtoast";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { headers } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";

import { RootState } from "@/redux/store";
import { getAllApplicationsBasedOnStatus } from "@/services/admin/applications";
import { getUsersApplicationsByStatus } from "@/services/applications";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DraftApplications = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApplications = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      let res;

      if (user?.accountType === "provider") {
        res = await getUsersApplicationsByStatus(user?.userId, "pending");
      } else {
        res = await getAllApplicationsBasedOnStatus("pending");
      }

      if (res.success) {
        setData(res?.data?.applications);
        setFilteredData(res?.data?.applications);
      }
    } catch (error: any) {
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

  const handleSearch = (value: string) => {
    const lowercasedValue = value.toLowerCase();

    const filtered = data.filter((item: any) =>
      [
        "organizationName",
        "applicationType",
        "applicationTitle",
        "status",
      ].some(
        (key) =>
          item[key]?.toLowerCase().includes(lowercasedValue) ||
          item?.step1?.personalInformation?.firstName
            ?.toLowerCase()
            .includes(lowercasedValue) ||
          item?.step1?.personalInformation?.lastName
            ?.toLowerCase()
            .includes(lowercasedValue)
      )
    );

    setFilteredData(filtered);
  };

  useEffect(() => {
    if (user) fetchApplications();
  }, [user]);

  return (
    <ApplicationsPageLayout
      title="Pending Applications"
      handleSearch={handleSearch}
      headers={headers}
      filteredData={filteredData || []}
    >
      <OrganizationApplicationLists
        data={filteredData || []}
        fetchFunction={fetchApplications}
        isLoading={isLoading}
      />
    </ApplicationsPageLayout>
  );
};

export default DraftApplications;
