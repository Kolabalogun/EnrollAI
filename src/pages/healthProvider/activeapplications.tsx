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

const ActiveApplications = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [data, setData] = useState([]);
  const fetchApplications = async () => {
    console.log(user);

    try {
      const res = await getUsersApplicationsByStatus(user?.userId, "approved");
      console.log(res);
      if (res.success) {
        setData(res?.data?.applications);
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to fetch Application"}`
      );
    }
  };
  useEffect(() => {
    if (user) fetchApplications();
  }, [user]);
  return (
    <ApplicationsPageLayout
      handleSearch={() => console.log("")}
      headers={headers}
      filteredData={data}
      title="Approved Applications"
    >
      <OrganizationApplicationLists
        data={data}
        fetchFunction={fetchApplications}
      />
    </ApplicationsPageLayout>
  );
};

export default ActiveApplications;
