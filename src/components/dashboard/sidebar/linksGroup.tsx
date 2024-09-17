/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useToast } from "@chakra-ui/react";
import { logout } from "@/redux/features/authSlice";
import { resetDomainForm } from "@/redux/features/domainSlice";
import { useGlobalContext } from "@/context/useGlobalContext";
import showToast from "@/components/common/showtoast";

type LinksGroupType = {
  icon: any;
  iconWhite: any;
  label: string;
  buttonLink: string;
  drawer?: boolean;
};

export function LinksGroup({
  icon,
  label,
  buttonLink,
  iconWhite,
  drawer,
}: LinksGroupType) {
  const navigate = useNavigate();
  // Retrieve user details from Redux state
  // const user = useSelector((state: any) => state.auth.user);

  const toast = useToast();

  // Logout Modal
  const [dialogOpen, setDialogOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // Mobile Nav Drawer

  // const { onClose } = useGlobalContext();

  const dispatch = useDispatch();

  // Set selectedMenuItem to the current pathname on initial load
  useEffect(() => {
    const currentPath = window.location.pathname;
    const selectedMenuItem = localStorage.getItem("selectedMenuItem");
    if (selectedMenuItem !== currentPath) {
      localStorage.setItem("selectedMenuItem", currentPath);
    }
  }, []);

  // Update the selected menu item in local storage when the button link changes
  useEffect(() => {
    if (buttonLink && buttonLink === window.location.pathname) {
      localStorage.setItem("selectedMenuItem", buttonLink);
    }
  }, [buttonLink]);

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      dispatch(logout());
      localStorage.removeItem("enrollai-user");
      dispatch(resetDomainForm());

      showToast(toast, "Crawler", "error", "You've successfully logged out");
      navigate("/login");
      setIsLoading(false);
    } catch (error) {
      console.error("Logout error:", error);

      showToast(toast, "Crawler", "error", "Error Logging out user");
      setIsLoading(false);
    }
  };

  // Handle button click and update the selected menu item in local storage

  const handleButtonClick = () => {
    if (buttonLink) {
      if (buttonLink === "/dashboard/logout") {
        // onClose();
        if (drawer) {
          logoutHandler();
        } else {
          setDialogOpen(true);
        }
      } else {
        localStorage.setItem("selectedMenuItem", buttonLink);
        navigate(buttonLink);
        // onClose();
      }
    }
  };

  // Retrieve the selected menu item from local storage
  const selectedMenuItem = localStorage.getItem("selectedMenuItem");

  return (
    <>
      {/* <ConfirmationModal
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        title="Logout"
        desc="Are you sure you want to log out?"
        buttonText="Logout"
        isLoading={isLoading}
        onSubmit={logoutHandler}
      /> */}

      <button
        onClick={handleButtonClick}
        className={`flex gap-3   py-3 rounded-md px-4 raleway font-semibold  items-center ${
          // Apply a background gradient style if the button link matches the selected menu item
          buttonLink === selectedMenuItem ? "bg-[#f7f2f6] " : ""
        }`}
      >
        {buttonLink === selectedMenuItem ? icon : iconWhite}
        <div
          className={`  text-[13px]  ${
            buttonLink === selectedMenuItem
              ? "text-secondary"
              : "text-dark-200 "
          }`}
        >
          {label}
        </div>
      </button>
    </>
  );
}
