/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import showToast from "@/components/common/showtoast";
import LoadingCarts from "@/components/pages/dashboard/loadingarts";
import { ReusableTable } from "@/components/table/selectTable";
import { notificationColumns } from "@/constant/data/table/notificationHeads";
import { getAllNotifications } from "@/services/notifications";
import { useToast } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const Notifications = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNotifications = async () => {
    setIsLoading(true);
    try {
      const res = await getAllNotifications();
      if (res.success) {
        console.log(res);

        setData(res?.data?.activities);
        setFilteredData(res?.data?.activities);
      }
    } catch (error: any) {
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to fetch notifications"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleSearch = (value: string) => {
    const lowercasedValue = value.toLowerCase();

    const filtered = data.filter(
      (item: any) =>
        item.actionType.toLowerCase().includes(lowercasedValue) ||
        item.actionDetails.toLowerCase().includes(lowercasedValue)
    );

    setFilteredData(filtered);
  };
  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-3xl">Notifications</p>
      </div>

      <div className="flex  gap-4 ">
        <div className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-3 xl:p-5 space-y-10">
          <div className="w-full flex xl:flex-row gap-3 flex-col-reverse justify-between xl:items-center">
            <div className="flex-1">
              <div className="bg-[#f9fafb] border-fade border items-center flex rounded-full xl:w-96 py-2 px-4">
                <Search className="text-fade" size={14} />
                <input
                  onChange={(e) => handleSearch(e.target.value)}
                  type="text"
                  className="bg-transparent outline-none py-2 raleway text-xs px-2"
                  placeholder="Search Health Plan here..."
                />
              </div>
            </div>

            {/* <div className="flex gap-6 justify-between items-center">
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
            </div> */}
          </div>
          {isLoading ? (
            <LoadingCarts />
          ) : (
            <div className="">
              <ReusableTable
                data={filteredData}
                columns={notificationColumns}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Notifications;
