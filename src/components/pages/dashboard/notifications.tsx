import { EllipsisVertical } from "lucide-react";

const Notifications = ({
  title,
  data,
}: {
  title: string;
  data: JSX.Element[];
}) => {
  return (
    <div className="p-5 bg-white rounded-lg space-y-5">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-base">{title ?? "Notifications"} </p>

        <div className="cursor-pointer">
          <EllipsisVertical className="text-[#667085] " size={16} />
        </div>
      </div>

      <div className=" ">{data}</div>
    </div>
  );
};

export default Notifications;
