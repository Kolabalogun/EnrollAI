import OrganizationStatCard from "./statcard";
import { AlertCircle, Send, User } from "lucide-react";

const OrganizationStatBar = () => {
  return (
    <div className="flex w-full flex-1 gap-5">
      <OrganizationStatCard
        title="Total Applications"
        value={0}
        icon={<Send size={20} className="text-secondary" />}
        bgColor="bg-[#e9d2f4]"
      />
      <OrganizationStatCard
        title="Incoming Applications"
        value={0}
        icon={<Send size={20} className="text-[#6a89d7]" />}
        bgColor="bg-[#d2f0f4]"
      />
      <OrganizationStatCard
        title={"Approved Providers"}
        value={0}
        icon={<User size={20} className="text-[#00cc5f]" />}
        bgColor="bg-[#d2f0f4]"
      />

      <OrganizationStatCard
        title="Pending Actions"
        value={0}
        icon={<AlertCircle size={20} className="text-[#e53d00]" />}
        bgColor="bg-[#f4ded2]"
      />
    </div>
  );
};

export default OrganizationStatBar;
