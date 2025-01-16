/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import showToast from "@/components/common/showtoast";
import { getAllNotifications } from "@/services/notifications";
import timeAgo from "@/utils/timeAgo";
import { useToast } from "@chakra-ui/react";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";

const Notifications = () => {
  const toast = useToast();
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchNotifications = async () => {
    setIsLoading(true);
    try {
      const res = await getAllNotifications();
      if (res.success) {
        console.log(res);

        setData(res?.data?.activities);
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

  const notifications = data?.slice(0, 4)?.map((activity: any) => (
    <div className="border-b space-x-5  flex items-center justify-between py-4">
      <div className="bg-secondary  rounded-full p-1 " />

      <p className="font-semibold capitalize flex-1 px-4 text-[12px]">
        {activity?.actionType}
      </p>

      <p className="font-semibold text-fade text-xs">
        {timeAgo(activity?.timestamp)}
      </p>
    </div>
  ));

  console.log(isLoading);
  return (
    <div className="p-5 bg-white rounded-lg space-y-5">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-base">{"Notifications"} </p>

        <div className="cursor-pointer">
          <EllipsisVertical className="text-[#667085] " size={16} />
        </div>
      </div>

      <div className=" ">{notifications}</div>
    </div>
  );
};

export default Notifications;
