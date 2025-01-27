/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/redux/store";
import OrganizationStatCard from "./statcard";
import { AlertCircle, Send, User } from "lucide-react";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ApplicationStatType } from "@/lib/types";
import { getOrganizationApplicationStats } from "@/services/org/applications";
import showToast from "@/components/common/showtoast";
import { getApplicationStats } from "@/services/admin/applications";

const OrganizationStatBar = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [providerStatData, setProviderStatData] =
    useState<ApplicationStatType | null>(null);
  const fetchStat = async () => {
    if (!user) return;

    try {
      const res = await getOrganizationApplicationStats(user?.id);
      if (res.success) {
        setProviderStatData(res?.data?.stats);
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
  const fetchAdminStat = async () => {
    try {
      const res = await getApplicationStats();
      console.log(res);

      if (res.success) {
        setProviderStatData(res?.data?.stats);
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
    if (user) {
      if (user?.accountType === "organization") {
        fetchStat();
      } else if (user?.accountType === "super_admin") {
        fetchAdminStat();
      }
    }
  }, [user]);

  return (
    <div className="flex xl:flex-row flex-col  w-full flex-1 gap-5">
      <OrganizationStatCard
        title="Total Applications"
        value={
          Number(providerStatData?.pending) +
            Number(providerStatData?.approved) +
            Number(providerStatData?.declined) || 0
        }
        icon={<Send size={20} className="text-secondary" />}
        bgColor="bg-[#e9d2f4]"
      />
      <OrganizationStatCard
        title="Incoming Applications"
        value={Number(providerStatData?.pending) || 0}
        icon={<Send size={20} className="text-[#6a89d7]" />}
        bgColor="bg-[#d2f0f4]"
      />
      <OrganizationStatCard
        title={"Approved Providers"}
        value={Number(providerStatData?.approved) || 0}
        icon={<User size={20} className="text-[#00cc5f]" />}
        bgColor="bg-[#d2f0f4]"
      />

      <OrganizationStatCard
        title="Declined Actions"
        value={Number(providerStatData?.declined) || 0}
        icon={<AlertCircle size={20} className="text-[#e53d00]" />}
        bgColor="bg-[#f4ded2]"
      />
    </div>
  );
};

export default OrganizationStatBar;
