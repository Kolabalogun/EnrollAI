import { EllipsisVertical } from "lucide-react";

const Notifications = () => {
  return (
    <div className="p-5 bg-white rounded-lg space-y-5">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[13px]">Notifications </p>

        <div className="cursor-pointer">
          <EllipsisVertical className="text-[#667085] " size={16} />
        </div>
      </div>

      <div className="">
        <div className="border-y   flex items-center justify-between py-4">
          <div className="bg-secondary rounded-full p-1 " />

          <p className="font-semibold text-[12px]">Geneva Health</p>

          <p className="p-1 bg-[#ccf0eb] text-green font-semibold text-[10px] ">
            Approved
          </p>

          <p className="font-semibold text-fade text-xs">8:38 AM</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
