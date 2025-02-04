// import { EllipsisVertical } from "lucide-react";

type Props = {
  title: string;
  value: number;
  status: string;
};

const StatCard = ({ title, value, status }: Props) => {
  return (
    <div className="p-5 bg-white rounded-lg flex flex-1 flex-col w-full ">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[13px]">{title} </p>

        {/* <div className="cursor-pointer">
          <EllipsisVertical className="text-[#667085] " size={16} />
        </div> */}
      </div>

      <div className="space-y-3">
        <p className="text-4xl font-semibold">{value}</p>

        <div className="flex justify-between  gap-6">
          <p className="font-medium text-fade text-xs">
            Obtaining Data for 1 month
          </p>

          <div className="flex gap-1 items-center">
            <div
              className={`p-1 ${
                status === "All"
                  ? "bg-secondary"
                  : status === "Approved"
                  ? "bg-green "
                  : status === "Completed"
                  ? "#32ADe6"
                  : status === "Declined"
                  ? "bg-[#fb0000]"
                  : "bg-[#f79000] "
              }`}
            />
            <p className="font-medium text-fade text-xs">{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
