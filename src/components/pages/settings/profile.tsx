/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from "@/assets/img";
import { SubmitButton } from "@/components/common";
import ConfirmationModal from "@/components/modals/confirmationModal";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PasswordModal from "./passwordModal";
import { useDispatch, useSelector } from "react-redux";
import showToast from "@/components/common/showtoast";
import { updateProfile } from "@/services/auth";
import { setCredentials } from "@/redux/features/authSlice";

type FormType = {
  fullName: string;
  email: string;
  password: string;
  companyName?: string;
  data?: any;
};

const providerInitialState = {
  fullName: "",
  email: "",
  password: "",
};
const organizationInitialState = {
  ...providerInitialState,
  companyName: "",
};

const Profile = () => {
  const { user } = useSelector((state: any) => state.auth);
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

  const [form, setForm] = useState<FormType>(
    user?.accountType !== "provider"
      ? organizationInitialState
      : providerInitialState
  );

  useEffect(() => {
    if (user) {
      setForm(user.data || user);
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(user, "user");

  const handleSubmit = async () => {
    setIsLoading(true);

    console.log(form, "form");

    try {
      if (user?.accountType !== "provider") {
        console.log("WIP");
      } else {
        if (!form.fullName || !form.email)
          return showToast(
            toast,
            "Enroll AI",
            "error",
            `Full Name and Email must be provided`
          );

        const data = {
          fullName: form.fullName,
          email: form.email,
        };
        const res = await updateProfile(data);
        console.log(res);

        if (res.success) {
          const newUser = {
            ...form,
            fullName: form.fullName,
            email: form.email,
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
        buttonText="Delete"
        message="Are you sure you want to delete your account? Once deleted, you will no longer have access to your account, and all the data will be permanently removed from our database."
        onConfirm={() => console.log("")}
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
              src={Avatar}
              className="h-24 w-24 rounded-full"
              alt="profile picture"
            />

            <div className="space-y-2">
              <p className="font-bold text-base">Dr. Alex Johnson</p>

              <p className="font-semibold text-fade   text-sm">
                alex.johnson@gmail.com
              </p>
            </div>
          </div>

          <div className="">
            <SubmitButton
              type="button"
              className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
            >
              <p className="font-bold text-xs">Edit Photo</p>
            </SubmitButton>
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
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={form.fullName}
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
                name="email"
                type="text"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
              />
            </div>
          </div>

          <div className="flex xl:flex-row flex-col justify-between gap-8">
            {user?.accountType !== "provider" && (
              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Your Company Name"
                  value={form.companyName}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>
            )}
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="Password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
              />
            </div>
            {user?.accountType !== "Organization" && (
              <div className="flex-1"></div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex flex-col px-5 py-10  ">
        <div className="border-b">
          <p className="text-[#383838] font-semibold pb-5 text-xs ">
            This account was created on January 5, 2024, 08:45:23 Am
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
