/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useToast } from "@chakra-ui/react";
import { logout } from "@/redux/features/authSlice";

import showToast from "@/components/common/showtoast";
import ConfirmationModal from "@/components/modals/confirmationModal";
import { resetForm } from "@/redux/features/applicationFormSlice";
import { ORG_LOGIN_ROUTE } from "@/router/routes";
import { logoutt } from "@/services/auth";

type LinksGroupType = {
  icon: any;
  iconWhite: any;
  label: string;
  buttonLink: string;
  drawer?: boolean;
  subLinks?: LinksGroupType[];
  onClose?: any;
};

export function LinksGroup({
  icon,
  label,
  buttonLink,
  iconWhite,
  subLinks,
  drawer,
  onClose,
}: LinksGroupType) {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const [dialogModal, setDialogModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { accountType } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  // Check if the current path matches the buttonLink or any of the subLinks' buttonLinks
  const isActive =
    location.pathname === buttonLink ||
    (subLinks &&
      subLinks.some((subLink) => location.pathname === subLink.buttonLink));

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logoutt();
      dispatch(logout());
      dispatch(resetForm());
      localStorage.removeItem("enrollai-user");
      localStorage.removeItem("enrollai-org-user");

      showToast(
        toast,
        "Enroll AI",
        "warning",
        "You've successfully logged out"
      );
      if (accountType === "organization") {
        navigate(ORG_LOGIN_ROUTE);
      } else {
        navigate("/login");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Logout error:", error);

      showToast(toast, "Enroll AI", "error", "Error Logging out user");
      setIsLoading(false);
    }
  };

  const handleButtonClick = () => {
    if (buttonLink) {
      if (buttonLink === "/dashboard/logout") {
        setDialogModal(true);

        setIsDropdownOpen(false);
      } else {
        if (drawer) {
          onClose();
        }
        // Toggle dropdown only for items with subLinks (like Applications)
        if (subLinks) {
          setIsDropdownOpen(!isDropdownOpen);
        }
        localStorage.setItem("selectedMenuItem", buttonLink);
        navigate(buttonLink);
      }
    }
  };

  return (
    <>
      <ConfirmationModal
        isOpen={dialogModal && buttonLink === "/dashboard/logout"}
        onClose={() => setDialogModal(false)}
        title="Logout"
        message="Are you sure you want to log out?"
        buttonText="Logout"
        isLoading={isLoading}
        onConfirm={logoutHandler}
      />

      <button
        onClick={handleButtonClick}
        className={`flex gap-3 py-3 rounded-md px-4 raleway font-semibold items-center ${
          isActive ? "bg-[#f7f2f6]" : ""
        }`}
      >
        {isActive ? icon : iconWhite}
        <div
          className={`text-[13px] ${
            isActive ? "text-secondary" : "text-dark-200"
          }`}
        >
          {label}
        </div>
      </button>

      {/* Render sublinks if they exist and dropdown is open or current route is a subLink */}
      {subLinks && (isDropdownOpen || isActive) && (
        <div className="ml-6">
          {subLinks.map((subLink) => (
            <LinksGroup
              onClose={onClose}
              drawer={drawer}
              {...subLink}
              key={subLink.label}
            />
          ))}
        </div>
      )}
    </>
  );
}
