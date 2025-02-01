// import { EllipsisVertical } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  title: string;
  value: number;

  icon: ReactNode;
  bgColor: string;
};

const OrganizationStatCard = ({
  title,
  value,

  icon,
  bgColor,
}: Props) => {
  return (
    <div className="px-5 py-8 bg-white rounded-lg flex flex-1 items-center   w-full  gap-3">
      <div className="flex">
        <div className={` rounded-full p-3 ${bgColor}`}>{icon}</div>
      </div>
      <div className="  flex flex-1 flex-col w-full ">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[13px]">{title} </p>

          {/* <div className="cursor-pointer">
            <EllipsisVertical className="text-[#667085] " size={16} />
          </div> */}
        </div>

        <div className="space-y-3 relative">
          <p className="text-5xl font-semibold">{value}</p>

          {/* <p className="text-fade absolute right-0 top-0">{title}</p> */}
        </div>
      </div>
    </div>
  );
};

export default OrganizationStatCard;
