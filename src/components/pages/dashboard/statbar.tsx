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

    try {
      const res = await getApplicationStatBasedOnUserId(user?.data?.userId);
      console.log(res, "resres");
      if (res.success) {
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
        title="Active Applications"
        value={providerStatData?.activeApplications || 0}
        status={"Active"}
      />
      <StatCard
        title={"Pending Applications"}
        value={providerStatData?.pendingApplications || 0}
        status={"Pending"}
      />
      {applications && (
        <StatCard title="Pending Applications" value={0} status={"Completed"} />
      )}
    </div>
  );
};

export default StatBar;
