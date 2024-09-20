import { SubmitButton } from "@/components/common";
import ApplicationsModal from "@/components/modal/applications";
import EmptyCarts from "@/components/pages/dashboard/emptyCarts";
import Notifications from "@/components/pages/dashboard/notifications";
import StatBar from "@/components/pages/dashboard/statbar";
import { Progress } from "@/components/ui/progress";
import { useDisclosure } from "@chakra-ui/react";

import { Pen, PlusIcon } from "lucide-react";

const Appications = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <ApplicationsModal isOpen={isOpen} onClose={onClose} />
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-lg">Welcome back, Dr. Alex!</p>

        <p className="font-medium text-fade text-xs">
          You have 0 pending application. Start a new application now.
        </p>
      </div>

      <div className="flex gap-10">
        <div
          style={{ flex: 2 }}
          className="flex flex-col w-full flex-1 space-y-9 "
        >
          <StatBar />

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
                    Start New Application{" "}
                  </p>
                  <PlusIcon size={16} />
                </div>
              </SubmitButton>
            </div>

            <div className="border-secondary text-secondary bg-transparent border-2 hover:bg-secondary transition duration-500 hover:text-white py-2 gap-3 px-10 cursor-pointer flex items-center justify-center rounded-lg">
              <p className="text-xs font-semibold">Review Draft </p>
              <Pen size={14} />
            </div>
          </div>

          <div className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-5 space-y-8">
            <p className="font-semibold text-[13px]">Active Applications</p>

            <EmptyCarts />
          </div>
        </div>

        <div className="space-y-9 flex flex-1 flex-col">
          <div className="p-5 bg-white rounded-lg space-y-5">
            <p className="font-semibold text-sm">
              Your CAQH Profile is:{" "}
              <span className="text-secondary">100% complete</span>{" "}
            </p>

            <div className="space-y-3">
              <p className="text-black text-xs">
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

          <div className="">
            <Notifications />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appications;
