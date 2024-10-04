import ReportStatCard from "./statcard";
import { Kanban } from "lucide-react";

const ReportStatBar = () => {
  return (
    <div className="flex w-full flex-1 lg:flex-row flex-col gap-5">
      <ReportStatCard
        title="Total Applications Processed"
        value={0}
        icon={<Kanban size={20} className="rotate-180 text-secondary" />}
        bgColor="bg-[#e9d2f4]"
      />
      <ReportStatCard
        title="Approved Applications"
        value={0}
        icon={<Kanban size={20} className="rotate-180 text-[#6a89d7]" />}
        bgColor="bg-[#d2f0f4]"
      />

      <ReportStatCard
        title={"Pending Applications"}
        value={0}
        icon={<Kanban size={20} className="rotate-180 text-[#00cc5f]" />}
        bgColor="bg-[#d2f0f4]"
      />
      <ReportStatCard
        title="Declined Applications"
        value={0}
        icon={<Kanban size={20} className="rotate-180 text-[#e53d00]" />}
        bgColor="bg-[#f4ded2]"
      />
    </div>
  );
};

export default ReportStatBar;
