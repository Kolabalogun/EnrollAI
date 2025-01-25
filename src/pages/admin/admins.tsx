/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import showToast from "@/components/common/showtoast";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { adminHeader } from "@/constant/data/headers";

import ApplicationsPageLayout from "@/layout/applicationsPage";
import { Admin } from "@/lib/types";
import { RootState } from "@/redux/store";
import { getAllAdmins } from "@/services/admin/applications";

import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Admins = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(filteredData);

  const fetchAdmins = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      const res = await getAllAdmins();
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
        `${error.message || "Failed to fetch admins"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user?.accountType === "super_admin") {
      fetchAdmins();
    }
  }, []);

  const handleSearch = (value: string) => {
    const lowercasedValue = value.toLowerCase();

    const filtered = data.filter(
      (item: Admin) =>
        item.fullName.toLowerCase().includes(lowercasedValue) ||
        item.email.toLowerCase().includes(lowercasedValue)
    );

    setFilteredData(filtered);
  };
  return (
    <ApplicationsPageLayout
      handleSearch={handleSearch}
      headers={adminHeader}
      filteredData={filteredData || []}
      title="Admins"
    >
      <OrganizationApplicationLists
        data={filteredData || []}
        fetchFunction={fetchAdmins}
        isLoading={isLoading}
        title="Admins"
      />
    </ApplicationsPageLayout>
  );
};

export default Admins;
