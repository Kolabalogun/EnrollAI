import { ChevronRight } from "lucide-react";

const ApplicationForm = () => {
  return (
    <div>
      <div className="flex  items-center gap-1">
        <p className="text-[11px] font-semibold text-fade">Dashboard</p>
        <ChevronRight className="text-[#667085]" size={15} />
        <p className="text-[11px] font-semibold text-[#667085]">Application</p>
      </div>
    </div>
  );
};

export default ApplicationForm;
