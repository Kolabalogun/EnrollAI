import SecondaryButton from "@/components/common/buttons/secondaryButton";
import { ReusableTable } from "@/components/table/selectTable";
import { notificationsData } from "@/constant/data/noticationdata";
import { notificationColumns } from "@/constant/table/notificationHeads";
import { Search } from "lucide-react";

const IncomingApplications = () => {
  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-3xl">Incoming Applications</p>
      </div>

      <div className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-5 space-y-6">
        <div className="w-full flex gap-5 justify-between items-center">
          <div className="flex-1">
            <p className="font-semibold text-base">Incoming Applications</p>
          </div>

          <div className="">
            <div className="bg-[#f9fafb] border-fade border items-center flex rounded-full  py-1 px-4">
              <Search className="text-fade" size={14} />
              <input
                type="text"
                className="bg-transparent outline-none py-1 raleway text-xs px-2"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="flex  ">
            <div className="">
              <SecondaryButton
                title="Export to CSV"
                handleClick={() => console.log("")}
              />
            </div>
          </div>
        </div>

        <div className="">
          <ReusableTable
            data={notificationsData}
            columns={notificationColumns}
          />
        </div>
      </div>
    </section>
  );
};

export default IncomingApplications;
