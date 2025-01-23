/* eslint-disable @typescript-eslint/no-explicit-any */
import showToast from "@/components/common/showtoast";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { headers } from "@/constant/data/headers";
import ApplicationsPageLayout from "@/layout/applicationsPage";
import { ApplicationFormInterface } from "@/lib/types";
import { RootState } from "@/redux/store";
import { getIncomingApplications } from "@/services/org/applications";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const IncomingApplications = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchApplications = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      const res = await getIncomingApplications(user?.organizationName);
      console.log(res);
      if (res.success) {
        setData(res?.data?.pendingApplications);
        setFilteredData(res?.data?.pendingApplications);
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
      (item: ApplicationFormInterface) =>
        item.applicationTitle.toLowerCase().includes(lowercasedValue) ||
        item.applicationName.toLowerCase().includes(lowercasedValue)
    );

    setFilteredData(filtered);
  };
  return (
    <ApplicationsPageLayout
      handleSearch={() => console.log("")}
      headers={headers}
      filteredData={filteredData || []}
      title="Incoming Applications"
    >
      <OrganizationApplicationLists
        data={filteredData || []}
        fetchFunction={() => console.log("")}
      />
    </ApplicationsPageLayout>
  );
};

export default IncomingApplications;
