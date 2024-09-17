import { Avatar } from "@/assets/img";
import { Bell, Hexagon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="xl:px-6 m-5 rounded-md px-3 bg-white py-5 flex justify-between  ">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-[#f9fafb] border-fade border items-center flex rounded-full w-96 py-2 px-4">
          <Hexagon className="text-fade" size={14} />
          <input
            type="text"
            className="bg-transparent outline-none raleway text-xs px-2"
            placeholder="Search Health Plan here..."
          />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="">
          <Bell className="text-[#667085] " size={20} />
        </div>

        <div className="h-full w-[1.3px] bg-[#667085] " />

        <div className="flex gap-2 items-center">
          <div className="rounded-full">
            <img src={Avatar} alt="" className="h-8 rounded-full" />
          </div>

          <div className="flex flex-col gap-!">
            <p className="text-xs font-semibold">Alex Johnson</p>
            <p className="text-xs font-medium text-fade">Health Provider</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
