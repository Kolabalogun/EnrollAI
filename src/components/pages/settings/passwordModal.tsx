/* eslint-disable @typescript-eslint/no-explicit-any */
import { Eye, EyeOff } from "lucide-react";

import { useState } from "react";

// import { useUpdatePasswordMutation } from "@/services/profile";
import showToast from "@/components/common/showtoast";
import { useToast } from "@chakra-ui/react";
import SecurityModal from "@/components/modals/settingsmodal";

type Props = {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PasswordModal = ({ dialogOpen, setDialogOpen }: Props) => {
  const toast = useToast();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

  const toggleCurrentPasswordVisibility = () =>
    setShowCurrentPassword(!showCurrentPassword);
  const toggleNewPasswordVisibility = () =>
    setShowNewPassword(!showNewPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword)
      return showToast(toast, "Settings", "error", "Passwords do not match");

    try {
      setIsLoading(true);
      // const payload = {
      //   currentPassword: currentPassword,
      //   newPassword: newPassword,
      // };

      // console.log(payload);

      // const res = await updatePassword(payload).unwrap();

      // console.log(res);

      showToast(toast, "Settings", "success", "Profile successfully updated");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      console.log(error);

      showToast(
        toast,
        "Settings",
        "error",
        `${error.data.msg || "Error Changing User Password"} `
      );
    }
  };

  return (
    <>
      <SecurityModal
        desc={"Please enter your current password and create a new password"}
        buttonText={"Create New Password"}
        title={"Create New Password"}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      >
        <>
          <div className="mb-5">
            <label className="block text-gray-700 text-[13px] font-medium   mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="border rounded-lg w-full py-3 px-3 text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={toggleCurrentPasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
              >
                {showCurrentPassword ? (
                  <Eye className="text-fade h-5 w-5" />
                ) : (
                  <EyeOff className="text-fade h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div className="mb-5">
            <label className="block font-medium text-gray-700 text-[13px]   mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border rounded-lg w-full py-3 px-3 text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={toggleNewPasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
              >
                {showNewPassword ? (
                  <Eye className="text-fade h-5 w-5" />
                ) : (
                  <EyeOff className="text-fade h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-[13px]  font-medium mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border rounded-lg w-full py-3 px-3 text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
              >
                {showConfirmPassword ? (
                  <Eye className="text-fade h-5 w-5" />
                ) : (
                  <EyeOff className="text-fade h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </>
      </SecurityModal>
    </>
  );
};

export default PasswordModal;
