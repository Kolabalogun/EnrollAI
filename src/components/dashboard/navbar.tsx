/* eslint-disable @typescript-eslint/no-explicit-any */

import { Bell, Hexagon, Menu } from "lucide-react";
import SidebarDrawer from "./sidebar/drawer";
import { useDisclosure } from "@chakra-ui/react";
import { SETTINGS_ROUTE } from "@/router/routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div className="xl:px-6 my-5 mx-3 xl:m-5 rounded-md px-3 bg-white py-5 flex justify-between  ">
      <SidebarDrawer onClose={onClose} isOpen={isOpen} />

      <div className="flex-1 flex items-center gap-3    xl:justify-center">
        <div onClick={onOpen} className="cursor-pointer block lg:hidden">
          <Menu />
        </div>
        <div className="bg-[#f9fafb] border-fade border items-center flex rounded-full xl:w-96 py-2 px-4">
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

        <div
          onClick={() => navigate(SETTINGS_ROUTE)}
          className="flex cursor-pointer gap-2 items-center"
        >
          <div className="rounded-full">
            <img
              src={
                user?.accountType !== "provider"
                  ? `https://eu.ui-avatars.com/api/?name=${user?.administratorFullName}&size=200`
                  : `https://eu.ui-avatars.com/api/?name=${user?.data?.fullName}&size=200`
              }
              className="h-8 rounded-full"
            ></img>
          </div>

          <div className="hidden xl:flex flex-col gap-!">
            <p className="text-xs font-semibold">
              {user?.accountType !== "provider"
                ? `${user?.administratorFullName || "N/A"}`
                : `${user?.data?.fullName || "N/A"}`}
            </p>
            <p className="text-xs font-medium text-fade">
              {user?.accountType !== "provider"
                ? "Organization"
                : "Health Provider"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
