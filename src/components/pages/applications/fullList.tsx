import { HEALTHCARE_APPLICATIONS } from "@/router/routes";
import { useNavigate } from "react-router-dom";
// import ApplicationLists from ".";
import { ChevronLeft } from "lucide-react";

const ApplicationsFullList = () => {
  const navigate = useNavigate();
  return (
    <section className="space-y-5 remove-scrollbar flex mb-20 flex-col">
      <div className="flex flex-col gap-4">
        <div
          onClick={() => navigate(HEALTHCARE_APPLICATIONS)}
          className="flex gap-3 items-center"
        >
          <ChevronLeft size={15} />
          <p className="font-semibold cursor-pointer text-xs">Go back</p>
        </div>
        <p className="font-semibold text-3xl">Applications</p>
      </div>

      <div className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-5 space-y-3">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-base">Active Applications</p>
        </div>

        {/* <ApplicationLists full /> */}
      </div>
    </section>
  );
};

export default ApplicationsFullList;
