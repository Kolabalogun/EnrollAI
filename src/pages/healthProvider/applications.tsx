/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { SubmitButton } from "@/components/common";
import ApplicationsModal from "@/components/modals/applications";
import ApplicationLists from "@/components/pages/applications";
import Notifications from "@/components/pages/dashboard/notifications";
import StatBar from "@/components/pages/dashboard/statbar";
import { useDisclosure } from "@chakra-ui/react";

import { Pen, PlusIcon } from "lucide-react";
import { HEALTHCARE_APPLICATIONS_FULL_LIST } from "@/router/routes";
import { useNavigate } from "react-router-dom";
import { recentActivitiesData } from "@/constant/data/recentactivitiesdat";

const Appications = () => {
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { lists } = useSelector((state: any) => state.applicationForm);

  const recentActivities = recentActivitiesData.map((activity) => (
    <div className="flex mb-4 justify-between cursor-pointer items-center">
      <div className="space-y-2">
        <p className="font-semibold text-[13px] ">{activity.title}</p>
        <p className="text-[12px] font-medium text-[#667085]">
          {activity.description}
        </p>
      </div>

      <p className="text-[12px] font-medium text-[#667085]">{activity.date} </p>
    </div>
  ));

  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <ApplicationsModal isOpen={isOpen} onClose={onClose} />
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-3xl">Applications</p>
      </div>

      <div
        style={{ flex: 2 }}
        className="flex flex-col w-full flex-1 space-y-9 "
      >
        <StatBar applications />

        <div className="flex gap-8">
          <div onClick={() => onOpen()}>
            <SubmitButton
              type="button"
              className=" border-0 px-6 py-4 rounded-lg"
            >
              <div
                className="flex items-center
                 gap-4"
              >
                <p className="text-xs font-semibold">Start New Application </p>
                <PlusIcon size={16} />
              </div>
            </SubmitButton>
          </div>

          <div className="border-secondary text-secondary bg-transparent border-2 hover:bg-secondary transition duration-500 hover:text-white py-2 gap-3 px-10 cursor-pointer flex items-center justify-center rounded-lg">
            <p className="text-xs font-semibold">Review Draft </p>
            <Pen size={14} />
          </div>
        </div>

        <div className="flex gap-10">
          <div
            style={{ flex: 2 }}
            className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-5 space-y-3"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-base">Active Applications</p>
              {lists?.length > 3 && (
                <p
                  onClick={() => navigate(HEALTHCARE_APPLICATIONS_FULL_LIST)}
                  className="font-semibold cursor-pointer text-xs text-fade"
                >
                  View All
                </p>
              )}
            </div>

            <ApplicationLists />
          </div>

          <div className="flex-1">
            <Notifications title="Recent Activities" data={recentActivities} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appications;
