/* eslint-disable @typescript-eslint/no-explicit-any */

import { SubmitButton } from "@/components/common";
import ConfirmationModal from "@/components/modals/confirmationModal";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PasswordModal from "./passwordModal";
import { useDispatch, useSelector } from "react-redux";
import showToast from "@/components/common/showtoast";
import { deleteAccount, updateProfile } from "@/services/auth";
import { logout, setCredentials } from "@/redux/features/authSlice";
import React from "react";

import { deleteOrgAccount, updateProfileOrg } from "@/services/org/auth";
import { formatDateTime } from "@/utils/formatDateTime";
import { deleteAdminAccount } from "@/services/admin/auth";
import { RootState } from "@/redux/store";

type FormType = {
  fullName?: string;
  email?: string;
  password: string;
  organizationName?: string;
  data?: any;
  workEmail?: string;
  administratorFullName?: string;
};

const providerInitialState = {
  fullName: "",
  email: "",
  password: "",
};
const organizationInitialState = {
  organizationName: "",
  workEmail: "",
  administratorFullName: "",
  password: "",
};

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: saveIsOpen,
    onClose: saveOnClose,
    onOpen: saveOnOpen,
  } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();

  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  const [profilePicture, setProfilePicture] = useState(
    user?.accountType === "organization" && !user?.profilePicture
      ? `https://eu.ui-avatars.com/api/?name=${user?.administratorFullName}&size=200`
      : user?.accountType === "organization" && user?.profilePicture
      ? user?.profilePicture
      : !user?.profilePicture
      ? `https://eu.ui-avatars.com/api/?name=${user?.fullName}&size=200`
      : user?.profilePicture
  );

  const [pictureFile, setPictureFile] = useState<File | null>(null);

  const [form, setForm] = useState<FormType>(
    user?.accountType === "organization"
      ? organizationInitialState
      : providerInitialState
  );

  useEffect(() => {
    if (user) {
      setForm(user.data || user);
    }
  }, [user]);

  console.log(form);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result as string;
        setProfilePicture(imageData);
        setPictureFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(user, "user");

  console.log(form, "form");

  const handleDeleteAccount = async () => {
    setDeleteIsLoading(true);
    try {
      let res;
      if (
        user?.accountType === "provider"
          ? (res = await deleteAccount())
          : user?.accountType === "super_admin"
          ? (res = await deleteAdminAccount())
          : (res = await deleteOrgAccount())
      )
        if (res.success) {
          showToast(
            toast,
            "Enroll AI",
            "success",
            "Your account have been successfully deleted."
          );
          dispatch(logout());
        }
    } catch (error: any) {
      console.log(error);
      showToast(toast, "Error", "error", error.message || "An error occurred.");
    } finally {
      setDeleteIsLoading(false);
    }
  };

  const handleProfilePictureUpload = async () => {
    if (!pictureFile) return null;

    setIsLoading(true);

    try {
      // Upload image to Cloudinary
      const data = new FormData();
      data.append("file", pictureFile);
      data.append("upload_preset", "ai_morgage");
      data.append("cloud_name", "dd0qqm1dv");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dd0qqm1dv/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const uploadedImage = await res.json();

      if (uploadedImage?.url) {
        return uploadedImage?.url;
      } else {
        showToast(toast, "Error", "error", "Image upload failed.");
        return null;
      }
    } catch (error: any) {
      console.error(error);
      showToast(toast, "Error", "error", error.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      if (user?.accountType === "organization") {
        if (
          !form.organizationName ||
          !form.administratorFullName ||
          !form.workEmail
        )
          return showToast(
            toast,
            "Enroll AI",
            "error",
            `Full Name and Email must be provided`
          );

        const pic = await handleProfilePictureUpload();

        const formData = new FormData();
        formData.append("organizationName", form.organizationName);
        formData.append("administratorFullName", form.administratorFullName);
        formData.append("workEmail", form.workEmail);

        if (pic) {
          formData.append("profilePicture", pic);
        }

        console.log(formData);

        const res = await updateProfileOrg(formData);

        console.log(res, "resresresresresresresres");

        if (res.success) {
          const newUser = {
            ...res?.data?.organization,
          };

          console.log(res);

          dispatch(setCredentials(newUser));

          showToast(
            toast,
            "Enroll AI",
            "success",
            `${res?.message || "Profile updated successfully"}`
          );
        } else {
          showToast(
            toast,
            "Enroll AI",
            "error",
            `${res?.message || "Profile updated successfully"}`
          );
        }

        saveOnClose();
      } else {
        if (!form.fullName || !form.email)
          return showToast(
            toast,
            "Enroll AI",
            "error",
            `Full Name and Email must be provided`
          );

        const pic = await handleProfilePictureUpload();

        const formData = new FormData();
        formData.append("fullName", form.fullName);
        formData.append("email", form.email);

        if (pic) {
          formData.append("profilePicture", pic);
        }

        const res = await updateProfile(formData);

        console.log(res, "resresresresresresresres");

        if (res?.success) {
          const newUser = {
            ...user,
            ...res?.data?.user,
          };

          console.log(newUser, "newUsernewUser");

          dispatch(setCredentials(newUser));

          saveOnClose();
          showToast(
            toast,
            "Enroll AI",
            "success",
            `${res?.data?.msg || "Profile updated successfully"}`
          );
        } else {
          showToast(
            toast,
            "Enroll AI",
            "error",
            `${res?.message || res.data?.msg || "An error occurred."} `
          );
        }
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "An error occurred"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div onSubmit={handleSubmit} className="space-y-9">
      <ConfirmationModal
        onClose={onClose}
        isOpen={isOpen}
        isLoading={deleteIsLoading}
        buttonText="Delete"
        message="Are you sure you want to delete your account? Once deleted, you will no longer have access to your account, and all the data will be permanently removed from our database."
        onConfirm={() => handleDeleteAccount()}
      />
      <ConfirmationModal
        onClose={saveOnClose}
        isOpen={saveIsOpen}
        onConfirm={() => handleSubmit()}
        isLoading={isLoading}
      />

      <PasswordModal
        dialogOpen={passwordDialogOpen}
        setDialogOpen={setPasswordDialogOpen}
      />
      <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex flex-col px-5 py-5 pb-20 space-y-12">
        <div className="flex xl:flex-row flex-col gap-4 xl:items-center justify-between">
          <div className="flex gap-5 items-center">
            <img
              src={profilePicture}
              className="h-24 w-24 rounded-full"
              alt="profile picture"
            />

            <div className="space-y-2">
              <p className="font-bold text-base">
                {user?.accountType === "organization"
                  ? `${user?.administratorFullName || "N/A"}`
                  : `${user?.fullName || user?.fullName || "N/A"}`}
              </p>
              <p className="font-semibold text-xs">
                {user?.accountType === "organization" &&
                  `${user?.organizationName || "N/A"}`}
              </p>
              <p className="font-semibold text-xs">
                {user?.accountType === "super_admin" && "Administrator"}
              </p>

              <p className="font-semibold text-fade   text-sm">
                {user?.email || user?.email || user?.workEmail || "N/A"}
              </p>
            </div>
          </div>

          <div className="">
            <div className="">
              <label
                htmlFor="uploadPhoto"
                className="py-2 flex gap-2  w-32 px-8 border rounded-md font-semibold bg-secondary text-white text-xs cursor-pointer"
              >
                <p className="font-bold text-xs">Edit Photo</p>
              </label>
              <input
                type="file"
                id="uploadPhoto"
                accept="image/*"
                className="hidden"
                onChange={(e) => handlePhotoChange(e)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex xl:flex-row flex-col justify-between gap-8">
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
              <label className="font-semibold" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                name={
                  user?.accountType === "organization"
                    ? "administratorFullName"
                    : "fullName"
                }
                type="text"
                placeholder="Full Name"
                value={form.fullName ?? form.administratorFullName}
                onChange={handleChange}
                className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name={
                  user?.accountType === "organization" ? "workEmail" : "email"
                }
                type="text"
                readOnly
                placeholder="Email Address"
                value={form.email ?? form.workEmail}
                // onChange={handleChange}
                className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
              />
            </div>
          </div>

          <div className="flex xl:flex-row w-full flex-col justify-between gap-8">
            {user?.accountType === "organization" && (
              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="organizationName">
                  Company Name
                </label>
                <input
                  id="organizationName"
                  name="organizationName"
                  type="text"
                  placeholder="Your Company Name"
                  value={form.organizationName}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>
            )}

            <div className="flex-1"></div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex flex-col px-5 py-10  ">
        <div className="border-b">
          <p className="text-[#383838] font-semibold pb-5 text-xs ">
            This account was created on{" "}
            {formatDateTime(user?.createdAt) ?? "N?A"}
          </p>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div onClick={() => onOpen()} className="cursor-pointer">
            <p className="font-semibold text-sm text-red-500">Delete Account</p>
          </div>

          <div className="">
            <SubmitButton
              handleSubmit={() => saveOnOpen()}
              isLoading={isLoading}
              className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
            >
              <p className="font-bold text-xs">Save</p>
            </SubmitButton>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex flex-col px-5 py-5  ">
        <div className="w-full pt-8  py-10 flex xl:flex-row flex-col   xl:items-center justify-between gap-6 flex-1 ">
          <div className="  ">
            <h2 className={`text-dark-200 inter   roboto  font-semibold pb-1`}>
              Reset Password
            </h2>
            <p className="text-text-primary text-xs ">
              Remember to securely store your new password to avoid losing
              access to your account.
            </p>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              setPasswordDialogOpen(true);
            }}
            className="bg-[#f5f5f5] rounded-lg raleway  border-[#b2b2b2]  border-[1px] text-dark-200 font-semibold text-xs py-2 px-4 inter"
          >
            Update Password
          </button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
