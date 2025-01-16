import { SubmitButton } from "@/components/common";

import ApplicationsModal from "@/components/modals/applications";
import CreateApplicationModal from "@/components/modals/createApplicationModal";
import ApplicationLists from "@/components/pages/applications";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import Notifications from "@/components/pages/dashboard/notifications";
import OrganizationStatBar from "@/components/pages/dashboard/organization/statbar";
import StatBar from "@/components/pages/dashboard/statbar";
import { Progress } from "@/components/ui/progress";

import { RootState } from "@/redux/store";
import { SETTINGS_ROUTE } from "@/router/routes";

import { useDisclosure } from "@chakra-ui/react";
import { Pen, PlusIcon } from "lucide-react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    isOpen: orgIsOpen,
    onClose: orgOnClose,
    onOpen: orgOnOpen,
  } = useDisclosure();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);

  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <ApplicationsModal isOpen={isOpen} onClose={onClose} />

      <CreateApplicationModal isOpen={orgIsOpen} onClose={orgOnClose} />
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-lg">
          Welcome back,{" "}
          {user?.accountType !== "provider"
            ? `${user?.organizationName || "N/A"}`
            : `${user?.fullName || "N/A"}`}
        </p>

        <p className="font-medium text-fade text-xs">
          {`Start a new application now.`}
        </p>
      </div>

      <div className="flex xl:flex-row flex-col gap-10">
        <div
          style={{ flex: 2.25 }}
          className="flex flex-col justify-between w-full flex-1 space-y-9 "
        >
          <div className="">
            {user?.accountType !== "provider" ? (
              <OrganizationStatBar />
            ) : (
              <StatBar />
            )}
          </div>
          <div className="flex xl:flex-row flex-col gap-5 xl:gap-8">
            <div
              onClick={
                user?.accountType !== "provider"
                  ? () => orgOnOpen()
                  : () => onOpen()
              }
            >
              <SubmitButton
                type="button"
                className=" border-0 px-6 py-4 rounded-lg"
              >
                <div
                  className="flex items-center
                 gap-4"
                >
                  <p className="text-xs font-semibold">
                    {user?.accountType !== "provider" ? "Create" : "Start"} New
                    Application
                  </p>
                  <PlusIcon size={16} />
                </div>
              </SubmitButton>
            </div>

            <div
              onClick={() =>
                navigate("/dashboard/health-provider/pending-applications")
              }
              className="border-secondary text-secondary bg-transparent border-2 hover:bg-secondary transition duration-500 hover:text-white py-2 gap-3 px-10 cursor-pointer flex items-center justify-center rounded-lg"
            >
              <p className="text-xs font-semibold">Pending Applications</p>
              <Pen size={14} />
            </div>
          </div>
        </div>

        {user?.accountType !== "Organization" && (
          <div className="p-5 bg-white flex-1 rounded-lg space-y-5">
            <p className="font-semibold text-sm">
              Your CAQH Profile is:{" "}
              <span
                className={` ${
                  user?.profileStatus === 100
                    ? "text-secondary "
                    : "text-[#ef8b66] "
                } `}
              >
                {user?.profileStatus}% complete
              </span>{" "}
            </p>

            <div className="space-y-3">
              <p className="text-black text-xs  ">
                {user?.profileStatus === 100
                  ? "Great job! Your CAQH profile is 100% complete and up to date. Keeping your profile current helps streamline credentialing and    enrollment processes with health plans."
                  : "To ensure smooth credentialing and enrollment, please complete your profile as soon as possible."}
              </p>

              <div className="flex items-center gap-2">
                <Progress
                  color={user?.profileStatus === 100 ? "green" : "orange"}
                  className={`${
                    user?.profileStatus === 100 ? "bg-green" : "bg-[#ef8b66]"
                  }`}
                  value={user?.profileStatus}
                />

                <p className="font-semibold">{user?.profileStatus}%</p>
              </div>
              <p className="text-black text-xs italic">
                {user?.profileStatus === 100
                  ? "Consider reviewing your profile periodically to ensure all information remains accurate."
                  : "Complete the missing sections to keep your credentialing information up to date."}
              </p>
            </div>

            <div className="">
              <SubmitButton
                handleSubmit={() => navigate(SETTINGS_ROUTE)}
                className=" border-0 px-6 py-4 rounded-lg"
              >
                {user?.profileStatus === 100 ? "Review" : "Update"} Profile
              </SubmitButton>
            </div>
          </div>
        )}
      </div>

      <div className="flex xl:flex-row flex-col gap-10">
        <div
          style={{ flex: 2 }}
          className="bg-white rounded-lg flex-1 h-full w-full flex  flex-col p-5 space-y-8"
        >
          <p className="font-semibold text-base">
            {user?.accountType !== "provider"
              ? "Incoming Applications"
              : "Tasks and Activities"}
          </p>

          {user?.accountType !== "provider" ? (
            <OrganizationApplicationLists
              fetchFunction={() => console.log("")}
            />
          ) : (
            <ApplicationLists />
          )}
        </div>

        <div className="flex-1">
          <Notifications />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
