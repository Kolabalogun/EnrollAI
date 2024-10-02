import { ReactNode } from "react";

type Props = {
  title: string;
  value: number;
  icon: ReactNode;
  bgColor: string;
};

const ReportStatCard = ({ title, value, icon, bgColor }: Props) => {
  return (
    <div className="px-5 py-8 bg-white rounded-xl shadow-md flex flex-col flex-1    w-full  gap-5">
      <div className="flex">
        <div className={` rounded-full p-3 ${bgColor}`}>{icon}</div>
      </div>
      <div className="  flex flex-1 flex-col w-full ">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-text-primary text-[13px]">
            {title}{" "}
          </p>
        </div>

        <div className="space-y-3 relative">
          <p className="text-5xl text-[#2b3674] font-semibold">{value}</p>

          {/* <p className="text-fade absolute right-0 top-0">{title}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ReportStatCard;
