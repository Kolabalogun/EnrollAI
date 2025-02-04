/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApplicationStatType } from "@/lib/types";
import StatCard from "./statcard";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getApplicationStatBasedOnUserId } from "@/services/applications";
import showToast from "@/components/common/showtoast";

const StatBar = ({ applications }: { applications?: boolean }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [providerStatData, setProviderStatData] =
    useState<ApplicationStatType | null>(null);
  const fetchProviderStat = async () => {
    console.log(user);

    if (!user) return;

    try {
      const res = await getApplicationStatBasedOnUserId(user?.userId);
      console.log(res, "resres");
      if (res?.success) {
        setProviderStatData(res?.data);
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to fetch Application Stats"}`
      );
    }
  };
  useEffect(() => {
    if (user && user?.accountType === "provider") fetchProviderStat();
  }, [user]);

  return (
    <div className="flex w-full xl:flex-row flex-col flex-1 gap-5">
      <StatCard
        title="Total Applications"
        value={providerStatData?.totalApplications || 0}
        status={"All"}
      />
      <StatCard
        title="Approved Applications"
        value={providerStatData?.approvedApplications || 0}
        status={"Approved"}
      />
      <StatCard
        title={"Pending Applications"}
        value={providerStatData?.pendingApplications || 0}
        status={"Pending"}
      />
      {applications && (
        <StatCard
          title={"Declined Applications"}
          value={
            (providerStatData?.totalApplications &&
              providerStatData?.approvedApplications &&
              providerStatData?.pendingApplications &&
              providerStatData?.totalApplications -
                (providerStatData?.pendingApplications +
                  providerStatData?.approvedApplications)) ||
            0
          }
          status={"Declined"}
        />
      )}
    </div>
  );
};

export default StatBar;
