/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Avatar } from "@/assets/img";

import { close, open } from "@/redux/features/toggleSidebarSlice";

import ProgressBar from "@/components/common/progressBar";
import { useGlobalContext } from "@/context/useGlobalContext";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { links } = useGlobalContext();
  const allDomains = useSelector((state: any) => state.addDomains.domains);

  // Retrieve user details from Redux state
  const user = useSelector((state: any) => state.auth.user);
  console.log(user);

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

  return (
    <div
      className={`  border-r-fade border-r-[2px] rounded-lg pb-5 p-6  h-screen overflow-y-auto z-50 scrollbar-y transition lg:flex flex-col justify-between ease-in-out w-[230px]   hidden `}
    >
      <div className="flex flex-col">
        {/* Logo */}
        <div className="mb-6">
          <Link to={"/"}>
            <div className=" ">
              <h1 className="dashboard-logo  ">Crawler</h1>
            </div>
          </Link>
        </div>

        {/* Menu links */}
        {links}
      </div>

      {/* Logout button */}

      <div className="flex flex-col space-y-6 mb-5">
        <div className=" mb-3 text-center flex flex-col items-center gap-1">
          <img src={Avatar} alt="avatar" className="rounded-full h-12 w-12  " />

          <p className="text-dark-200 inter font-semibold  ">
            {user?.fullName ?? "John Doe"}
          </p>
          <p className="text-xs font-light text-text-primary ">
            {user?.email ?? "johndoe@gmail.com"}
          </p>
        </div>

        <div className="flex flex-col  ">
          <p className="inter mb-1 font-medium text-[13px] ">
            Free <span className="font-normal">Plan</span>
          </p>

          <ProgressBar value={66} className="sidebar bg-[#ebffee] " />
        </div>

        <div className="flex gap-2  justify-between items-center">
          <div className="flex text-center flex-col">
            {/* <p className="text-xs inter font-medium">2450</p> */}

            <p className="text-xs inter font-medium">
              {allDomains?.length || 0}
            </p>

            <p className="text-xs font-light text-text-primary ">Websites</p>

            {/* <p className="text-xs font-light text-text-primary ">
              Click reviews
            </p> */}
          </div>
          <div className="h-full w-[1px] bg-fade"></div>
          <div className="flex flex-col">
            <p className="text-xs inter font-medium">13,405</p>

            <p className="text-xs font-light text-text-primary ">
              Monthly clicks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
