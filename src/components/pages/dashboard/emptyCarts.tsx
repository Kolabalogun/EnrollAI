import { EmptyImg } from "@/assets/img";

const EmptyCarts = () => {
  return (
    <div className="flex pb-10 flex-col justify-between items-center">
      <div className="flex flex-col text-center gap-4">
        <div className="h-24 w-24">
          <img src={EmptyImg} alt="" className="h-full w-full" />
        </div>

        <p className="font-semibold text-[13px]">Recent Activities</p>

        <p className="font-medium text-fade text-xs">No recent activity yet.</p>
      </div>
    </div>
  );
};

export default EmptyCarts;
