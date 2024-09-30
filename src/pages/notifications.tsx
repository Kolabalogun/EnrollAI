import SecondaryButton from "@/components/common/buttons/secondaryButton";
import { ReusableTable } from "@/components/table/selectTable";
import { notificationsData } from "@/constant/data/noticationdata";
import { notificationColumns } from "@/constant/table/notificationHeads";
import { OctagonAlert, Search, Trash2Icon } from "lucide-react";

const Notifications = () => {
  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-3xl">Notifications</p>
      </div>

      <div className="flex gap-4 ">
        <div className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-5 space-y-10">
          <div className="w-full flex justify-between items-center">
            <div className="flex-1">
              <div className="bg-[#f9fafb] border-fade border items-center flex rounded-full w-96 py-2 px-4">
                <Search className="text-fade" size={14} />
                <input
                  type="text"
                  className="bg-transparent outline-none py-2 raleway text-xs px-2"
                  placeholder="Search Health Plan here..."
                />
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <div className="flex ">
                <div className="bg-[#fafbfd] flex justify-between cursor-pointer  ">
                  <div className="p-3 rounded-l-xl border">
                    <OctagonAlert size={18} />
                  </div>
                </div>
                <div className="bg-[#fafbfd] flex justify-between cursor-pointer -mr-1  ">
                  <div className="p-3 rounded-r-xl border">
                    <Trash2Icon color="black" size={18} />
                  </div>
                </div>
              </div>
              <div className="">
                <SecondaryButton
                  title="Mark as Read "
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
      </div>
    </section>
  );
};

export default Notifications;
