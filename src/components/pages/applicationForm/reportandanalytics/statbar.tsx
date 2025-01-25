import ReportStatCard from "./statcard";
import { Kanban } from "lucide-react";

import { ApplicationStatType } from "@/lib/types";

const ReportStatBar = ({
  providerStatData,
}: {
  providerStatData: ApplicationStatType | null;
}) => {
  return (
    <div className="flex w-full flex-1 lg:flex-row flex-col gap-5">
      <ReportStatCard
        title="Total Applications Processed"
        value={
          Number(providerStatData?.pending) +
            Number(providerStatData?.approved) +
            Number(providerStatData?.declined) || 0
        }
        icon={<Kanban size={20} className="rotate-180 text-secondary" />}
        bgColor="bg-[#e9d2f4]"
      />
      <ReportStatCard
        title="Approved Applications"
        value={Number(providerStatData?.approved) || 0}
        icon={<Kanban size={20} className="rotate-180 text-[#6a89d7]" />}
        bgColor="bg-[#d2f0f4]"
      />

      <ReportStatCard
        title={"Pending Applications"}
        value={Number(providerStatData?.pending) || 0}
        icon={<Kanban size={20} className="rotate-180 text-[#00cc5f]" />}
        bgColor="bg-[#d2f0f4]"
      />
      <ReportStatCard
        title="Declined Applications"
        value={Number(providerStatData?.declined) || 0}
        icon={<Kanban size={20} className="rotate-180 text-[#e53d00]" />}
        bgColor="bg-[#f4ded2]"
      />
    </div>
  );
};

export default ReportStatBar;
