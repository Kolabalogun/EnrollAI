/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import { useGlobalContext } from "@/context/useGlobalContext";
import { Avatar } from "@/assets/img";
import ProgressBar from "@/components/common/progressBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { usersLinks } from "./navigationLinks";
import { LinksGroup } from "./linksGroup";

const SidebarDrawer = () => {
  const { user } = useSelector((state: any) => state.auth);

  // Mobile Nav Draawer
  const { onClose, isOpen } = useGlobalContext();

  const getUsersLinks = () => (
    <div className="flex flex-col gap-3 mb-8">
      <p className="text-white font-medium">Menu</p>
      {usersLinks.map((item) => (
        <LinksGroup drawer {...item} key={item.label} />
      ))}
    </div>
  );

  const links = user?.role === "admin" ? [] : getUsersLinks();

  return (
    <Drawer
      placement="left"
      id="sidebardrawer"
      onClose={onClose}
      isOpen={isOpen}
      size={"xs"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <Link to={"/"} onClick={onClose}>
            <h1 className="dashboard-logo">Crawler</h1>
          </Link>
        </DrawerHeader>

        <DrawerCloseButton size={"lg"} className="" onClick={onClose} />

        <DrawerBody>
          <div className="h-full flex flex-col justify-between">
            <div className="flex mt-5 pr-16 flex-col">
              {/* Render menu links */}
              {links}
            </div>

            <div className="flex flex-col space-y-6 mb-5">
              <div className="mb-3 text-center flex flex-col items-center gap-1">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="rounded-full h-12 w-12"
                />

                <p className="text-dark-200 inter font-semibold">
                  {user?.fullName ?? "John Doe"}
                </p>
                <p className="text-xs font-light text-text-primary">
                  {user?.email ?? "johndoe@gmail.com"}
                </p>
              </div>

              <div className="flex flex-col">
                <p className="inter mb-1 font-medium text-[13px]">
                  Plan <span className="font-normal">User</span>
                </p>

                <ProgressBar value={66} className="sidebar bg-[#ebffee]" />
              </div>

              <div className="flex gap-2 justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-xs inter font-medium">2450</p>

                  <p className="text-xs font-light text-text-primary">
                    Click reviews
                  </p>
                </div>
                <div className="h-full w-[1px] bg-fade"></div>
                <div className="flex flex-col">
                  <p className="text-xs inter font-medium">13,405</p>

                  <p className="text-xs font-light text-text-primary">
                    Monthly clicks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SidebarDrawer;
