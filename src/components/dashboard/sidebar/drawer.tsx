/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useToast,
} from "@chakra-ui/react";
import { healthProviderLinks, organizationLinks } from "./navigationLinks";
import { LinksGroup } from "./linksGroup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "@/assets/img";
import ConfirmationModal from "@/components/modals/confirmationModal";
import { useState } from "react";
import { LogOut } from "lucide-react";
import showToast from "@/components/common/showtoast";
import { logout } from "@/redux/features/authSlice";

const SidebarDrawer = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [dialogModal, setDialogModal] = useState(false);
  const { accountType } = useSelector((state: any) => state.auth);

  const filteredOrgLink = organizationLinks.filter(
    (link) => link.label !== "Logout"
  );
  const filteredProvLink = healthProviderLinks.filter(
    (link) => link.label !== "Logout"
  );

  const getOrganizationLinks = () => {
    const groupedUserLinks: Record<string, any[]> = {};

    filteredOrgLink.forEach((link: any) => {
      if (link.title) {
        if (!groupedUserLinks[link.title]) {
          groupedUserLinks[link.title] = [];
        }
        groupedUserLinks[link.title].push(link);
      }
    });

    return Object.keys(groupedUserLinks).map((title) => (
      <div key={title} className="flex raleway flex-col gap-3 ">
        <p className="text-[#4b4b4b] font-semibold mt-8 text-xs">{title}</p>
        {groupedUserLinks[title].map((item) => (
          <LinksGroup onClose={onClose} drawer {...item} key={item.label} />
        ))}
      </div>
    ));
  };

  const getProviderLinks = () => {
    const groupedUserLinks: Record<string, any[]> = {};

    filteredProvLink.forEach((link: any) => {
      if (link.title) {
        if (!groupedUserLinks[link.title]) {
          groupedUserLinks[link.title] = [];
        }
        groupedUserLinks[link.title].push(link);
      }
    });

    // Generate JSX elements for each title group
    return Object.keys(groupedUserLinks).map((title) => (
      <div key={title} className="flex raleway flex-col gap-3 ">
        <p className=" text-[#4b4b4b] font-semibold mt-8 text-xs ">{title}</p>
        {groupedUserLinks[title].map((item) => (
          <LinksGroup onClose={onClose} drawer {...item} key={item.label} />
        ))}
      </div>
    ));
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      dispatch(logout());
      localStorage.removeItem("enrollai-user");

      showToast(
        toast,
        "Enroll AI",
        "warning",
        "You've successfully logged out"
      );
      navigate("/login");
      setIsLoading(false);
    } catch (error) {
      console.error("Logout error:", error);

      showToast(toast, "Enroll AI", "error", "Error Logging out user");
      setIsLoading(false);
    }
  };

  const links =
    accountType === "Organization"
      ? getOrganizationLinks()
      : getProviderLinks();

  return (
    <>
      <ConfirmationModal
        isOpen={dialogModal}
        onClose={() => setDialogModal(false)}
        title="Logout"
        message="Are you sure you want to log out?"
        buttonText="Logout"
        isLoading={isLoading}
        onConfirm={logoutHandler}
      />
      <Drawer
        placement="left"
        id="sidebardrawer"
        onClose={onClose}
        isOpen={isOpen}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent
          maxWidth="284px"
          width="100%"
          bgColor={"#f9fafb"}
          paddingRight={0}
          paddingLeft={0}
        >
          <DrawerHeader>
            <Link
              to={"/"}
              onClick={onClose}
              className="flex items-center gap-1 "
            >
              <img src={Logo} alt="" className="h-10" />
              <p className=" font-medium text-base   text-secondary">
                Enroll Hub
              </p>
            </Link>
          </DrawerHeader>

          <DrawerCloseButton size={"lg"} className="" onClick={onClose} />

          <DrawerBody paddingRight={0} paddingTop={0} paddingLeft={0}>
            <div className="pb-5 px-6 text-black flex flex-col">
              <div className="flex flex-col">
                {/* Menu links */}
                {links}

                <button
                  onClick={() => {
                    onClose();
                    setDialogModal(true);
                  }}
                  className={`flex gap-3 py-3 mt-2 rounded-md px-4 raleway font-semibold items-center   `}
                >
                  <LogOut size={20} className="text-[#667085] rotate-180" />
                  <div className={`text-[13px]  text-dark-200`}>Logout</div>
                </button>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
