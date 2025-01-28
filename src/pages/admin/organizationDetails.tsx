/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { SubmitButton } from "@/components/common";
import showToast from "@/components/common/showtoast";
import ConfirmationModal from "@/components/modals/confirmationModal";
import { Organization } from "@/lib/types";
import {
  changeAccountStatus,
  deleteProviderOrOrganization,
} from "@/services/admin/applications";
import { formatDateTime } from "@/utils/formatDateTime";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrganizationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const toast = useToast();

  console.log(status);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    isOpen: deleteIsOpen,
    onClose: deleteOnClose,
    onOpen: deleteOnOpen,
  } = useDisclosure();

  const state = (JSON.parse(location.state) as Organization) || null;
  console.log(state);

  useEffect(() => {
    if (!state) navigate(-1);
    else setStatus(state.status);
  }, [state]);

  const handleChangeStatus = async (newStatus: "active" | "suspended") => {
    try {
      setLoading(true);
      const response = await changeAccountStatus(
        state?._id,
        "organization",
        newStatus
      );
      if (response.success) {
        setStatus(newStatus);
        showToast(
          toast,
          "Enroll AI",
          "success",
          `Account status updated successfully`
        );
        navigate("/dashboard/admin/organizations");
      } else {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `Failed to update account status`
        );
      }
    } catch (error: any) {
      console.error("Error changing account status:", error);

      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "An error occurred while updating account status"}`
      );
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this account? This action cannot be undone."
      )
    ) {
      try {
        setLoading(true);
        const response = await deleteProviderOrOrganization(
          state?._id,
          "organization"
        );
        if (response.success) {
          showToast(
            toast,
            "Enroll AI",
            "success",
            `Account deleted successfully`
          );
          navigate("/dashboard/admin/organizations");
        } else {
          showToast(toast, "Enroll AI", "error", `Failed to delete account`);
        }
      } catch (error) {
        console.error("Error deleting account:", error);
        showToast(
          toast,
          "Enroll AI",
          "error",
          `An error occurred while deleting the account`
        );
      } finally {
        setLoading(false);
        deleteOnClose();
      }
    }
  };

  return (
    <section className="flex space-y-9 mb-20 flex-col">
      <ConfirmationModal
        onClose={onClose}
        isOpen={isOpen}
        buttonText="Change"
        isLoading={loading}
        message="Are you sure you want to the status of this User? "
        onConfirm={() => {
          handleChangeStatus(status === "active" ? "suspended" : "active");
        }}
      />

      <ConfirmationModal
        onClose={deleteOnClose}
        isOpen={deleteIsOpen}
        buttonText="Delete"
        isLoading={loading}
        message="Are you sure you want to delete user account? Note that all the applications this user created or submitted will be deleted. "
        onConfirm={handleDeleteAccount}
      />

      <div className="flex lg:flex-row flex-col justify-between xl:items-center gap-4">
        <p className="font-semibold text-3xl">Organization Details</p>
      </div>

      <div className="p-5 rounded-lg bg-white space-y-5 shadow">
        <p className="font-semibold text-xl">Organization Informations</p>

        <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex flex-col px-5 py-5 pb-20 space-y-12">
          <div className="flex xl:flex-row flex-col gap-4 xl:items-center justify-between">
            <div className="flex gap-5 items-center">
              <img
                src={
                  state?.profilePicture ??
                  `https://eu.ui-avatars.com/api/?name=${state?.administratorFullName}&size=200`
                }
                className="h-24 w-24 rounded-full"
                alt="profile picture"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex xl:flex-row flex-col justify-between gap-8">
              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="fullName">
                  Organization Name
                </label>
                <input
                  id="fullName"
                  placeholder="Full Name"
                  readOnly
                  value={state?.organizationName}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>

              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="email">
                  Created At
                </label>
                <input
                  id="email"
                  readOnly
                  placeholder="Email Address"
                  value={formatDateTime(state?.createdAt)}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>
            </div>
            <div className="flex xl:flex-row flex-col justify-between gap-8">
              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="fullName">
                  Administrator Full Name
                </label>
                <input
                  id="fullName"
                  placeholder="Full Name"
                  readOnly
                  value={state?.administratorFullName}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>

              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  readOnly
                  placeholder="Email Address"
                  value={state?.workEmail}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <SubmitButton
              isLoading={loading}
              handleSubmit={onOpen}
              className={`py-2 ${
                status === "active"
                  ? "bg-red-500 border-red-500"
                  : "bg-green border-green"
              } flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs`}
            >
              {status === "active" ? "Suspend Account" : "Activate Account"}
            </SubmitButton>

            <SubmitButton
              isLoading={loading}
              handleSubmit={deleteOnOpen}
              className="py-2 bg-red-500 border-red-500 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
            >
              Delete Account
            </SubmitButton>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OrganizationDetails;
