/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitButton } from "@/components/common";
import ApplicationsModal from "@/components/modals/applications";
import ApplicationLists from "@/components/pages/applications";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import Notifications from "@/components/pages/dashboard/notifications";
import OrganizationStatBar from "@/components/pages/dashboard/organization/statbar";
import StatBar from "@/components/pages/dashboard/statbar";
import { Progress } from "@/components/ui/progress";
import { notificationsData } from "@/constant/data/noticationdata";
import { useDisclosure } from "@chakra-ui/react";
import { Pen, PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const { accountType } = useSelector((state: any) => state.auth);

  const notifications = notificationsData.map((activity) => (
    <div className="border-b space-x-5  flex items-center justify-between py-4">
      <div className="bg-secondary  rounded-full p-1 " />

      <p className="font-semibold flex-1 px-4 text-[12px]">{activity.title}</p>

      <p className="p-1 bg-[#ccf0eb] text-green font-semibold text-[10px] ">
        Approved
      </p>

      <p className="font-semibold text-fade text-xs">8:38 AM</p>
    </div>
  ));

  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <ApplicationsModal isOpen={isOpen} onClose={onClose} />
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-lg">
          Welcome back,{" "}
          {accountType === "Organization" ? "Cleveland Clinic!" : "Dr. Alex!"}
        </p>

        <p className="font-medium text-fade text-xs">
          You have 0 pending application. Start a new application now.
        </p>
      </div>

      <div className="flex gap-10">
        <div
          style={{ flex: 2.25 }}
          className="flex flex-col justify-between w-full flex-1 space-y-9 "
        >
          <div className="">
            {accountType === "Organization" ? (
              <OrganizationStatBar />
            ) : (
              <StatBar />
            )}
          </div>
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
                  <p className="text-xs font-semibold">
                    {accountType ? "Create" : "Start"} New Application
                  </p>
                  <PlusIcon size={16} />
                </div>
              </SubmitButton>
            </div>

            <div
              onClick={() =>
                navigate("/dashboard/health-provider/draft-applications")
              }
              className="border-secondary text-secondary bg-transparent border-2 hover:bg-secondary transition duration-500 hover:text-white py-2 gap-3 px-10 cursor-pointer flex items-center justify-center rounded-lg"
            >
              <p className="text-xs font-semibold">Review Draft </p>
              <Pen size={14} />
            </div>
          </div>
        </div>

        {accountType !== "Organization" && (
          <div className="p-5 bg-white flex-1 rounded-lg space-y-5">
            <p className="font-semibold text-sm">
              Your CAQH Profile is:{" "}
              <span className="text-secondary">100% complete</span>{" "}
            </p>

            <div className="space-y-3">
              <p className="text-black text-xs  ">
                Great job! Your CAQH profile is 100% complete and up to date.
                Keeping your profile current helps streamline credentialing and
                enrollment processes with health plans.
              </p>

              <div className="flex items-center gap-2">
                <Progress color={"green"} value={100} />

                <p className="font-semibold">100%</p>
              </div>
              <p className="text-black text-xs italic">
                Consider reviewing your profile periodically to ensure all
                information remains accurate.
              </p>
            </div>

            <div className="">
              <SubmitButton className=" border-0 px-6 py-4 rounded-lg">
                Review Profile
              </SubmitButton>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-10">
        <div
          style={{ flex: 2 }}
          className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-5 space-y-8"
        >
          <p className="font-semibold text-base">
            {accountType === "Organization"
              ? "Incoming Applications"
              : "Tasks and Activities"}
          </p>

          {accountType === "Organization" ? (
            <OrganizationApplicationLists />
          ) : (
            <ApplicationLists />
          )}
        </div>

        <div className="flex-1">
          <Notifications title="Notifications" data={notifications} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
