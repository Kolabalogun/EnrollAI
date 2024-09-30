/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Logo } from "@/assets/img";
import { close, open } from "@/redux/features/toggleSidebarSlice";
import { healthProviderLinks, organizationLinks } from "./navigationLinks";
import { LinksGroup } from "./linksGroup";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { accountType } = useSelector((state: any) => state.auth);

  // Close sidebar on window resize for smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        dispatch(close());
      } else {
        dispatch(open());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const getOrganizationLinks = () => {
    const groupedUserLinks: Record<string, any[]> = {};

    organizationLinks.forEach((link: any) => {
      if (link.title) {
        if (!groupedUserLinks[link.title]) {
          groupedUserLinks[link.title] = [];
        }
        groupedUserLinks[link.title].push(link);
      }
    });

    return Object.keys(groupedUserLinks).map((title) => (
      <div key={title} className="flex raleway flex-col gap-3 mb-8">
        <p className="text-[#4b4b4b] font-semibold text-xs">{title}</p>
        {groupedUserLinks[title].map((item) => (
          <LinksGroup {...item} key={item.label} />
        ))}
      </div>
    ));
  };

  const getProviderLinks = () => {
    const groupedUserLinks: Record<string, any[]> = {};

    healthProviderLinks.forEach((link: any) => {
      if (link.title) {
        if (!groupedUserLinks[link.title]) {
          groupedUserLinks[link.title] = [];
        }
        groupedUserLinks[link.title].push(link);
      }
    });

    // Generate JSX elements for each title group
    return Object.keys(groupedUserLinks).map((title) => (
      <div key={title} className="flex raleway flex-col gap-3 mb-8">
        <p className=" text-[#4b4b4b] font-semibold text-xs ">{title}</p>
        {groupedUserLinks[title].map((item) => (
          <LinksGroup {...item} key={item.label} />
        ))}
      </div>
    ));
  };

  const links =
    accountType === "Organization"
      ? getOrganizationLinks()
      : getProviderLinks();

  return (
    <div
      className={`  border-r-fade bg-primary border-r-[2px] pb-5 p-6  h-screen overflow-y-auto z-50 scrollbar-y remove-scrollbar transition lg:flex flex-col justify-between ease-in-out w-[300px]   hidden `}
    >
      <div className="flex flex-col">
        {/* Logo */}
        <div className="mb-14">
          <Link to={"/"} className="flex items-center gap-1 ">
            <img src={Logo} alt="" className="h-10" />
            <p className=" font-medium text-base   text-secondary">
              Enroll Hub
            </p>
          </Link>
        </div>

        {/* Menu links */}
        {links}
      </div>
    </div>
  );
};

export default Sidebar;
