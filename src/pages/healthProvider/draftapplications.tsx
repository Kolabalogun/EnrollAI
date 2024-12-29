/* eslint-disable @typescript-eslint/no-explicit-any */
import showToast from "@/components/common/showtoast";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import ApplicationsPageLayout from "@/layout/applicationsPage";
import { RootState } from "@/redux/store";
import { getAllApplicationsByUserId } from "@/services/applications";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DraftApplications = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [data, setData] = useState([]);
  const fetchPendingApplications = async () => {
    console.log(user);

    try {
      const res = await getAllApplicationsByUserId(user?.data?.userId);
      console.log(res);
      if (res.success) {
        setData(res?.data?.applications);
      }
    } catch (error) {
      console.log(error);

      showToast(
        toast,
        "Enroll AI",
        "error",
        "Accept terms and conditions before you proceed"
      );
    }
  };
  useEffect(() => {
    if (user) fetchPendingApplications();
  }, [user]);

  return (
    <ApplicationsPageLayout title="Draft Applications">
      <OrganizationApplicationLists data={data} />
    </ApplicationsPageLayout>
  );
};

export default DraftApplications;
