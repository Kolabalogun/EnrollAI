/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { SubmitButton } from "@/components/common";
import showToast from "@/components/common/showtoast";
import ConfirmationModal from "@/components/modals/confirmationModal";
import { ProviderAndApplications } from "@/lib/types";
import {
  changeAccountStatus,
  deleteProviderOrOrganization,
} from "@/services/admin/applications";
import { formatDateTime } from "@/utils/formatDateTime";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "@/redux/store";
import OrganizationApplicationLists from "@/components/pages/applications/organization";

const ProvidersDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const toast = useToast();

  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: deleteIsOpen,
    onClose: deleteOnClose,
    onOpen: deleteOnOpen,
  } = useDisclosure();

  const state = (JSON.parse(location.state) as ProviderAndApplications) || null;

  useEffect(() => {
    if (!state) navigate(-1);
    else setStatus(state.provider.status);
  }, [state]);

  const handleChangeStatus = async (newStatus: "active" | "suspended") => {
    try {
      setLoading(true);
      const response = await changeAccountStatus(
        state?.provider?._id,
        "provider",
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
        navigate("/dashboard/admin/providers");
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
          state?.provider?._id,
          "provider"
        );
        if (response.success) {
          showToast(
            toast,
            "Enroll AI",
            "success",
            `Account deleted successfully`
          );
          navigate("/dashboard/admin/providers");
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
        message="Are you sure you want to change the status of this User? "
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
        <p className="font-semibold text-3xl">Provider Details</p>
      </div>

      <div className="p-5 rounded-lg bg-white space-y-5 shadow">
        <p className="font-semibold text-xl">Provider Informations</p>

        <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex flex-col px-5 py-5 pb-20 space-y-12">
          <div className="flex xl:flex-row flex-col gap-4 xl:items-center justify-between">
            <div className="flex gap-5 items-center">
              <img
                src={
                  state?.provider?.profilePicture ||
                  `https://eu.ui-avatars.com/api/?name=${state?.provider?.fullName}&size=200`
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
                  Full Name
                </label>
                <input
                  id="fullName"
                  placeholder="Full Name"
                  readOnly
                  value={state?.provider?.fullName}
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
                  value={state?.provider?.email}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>
            </div>
            {user?.accountType === "super_admin" && (
              <div className="flex xl:flex-row flex-col justify-between gap-8">
                <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                  <label className="font-semibold" htmlFor=" Joined At">
                    Joined At
                  </label>
                  <input
                    id=" Joined At"
                    placeholder=" Joined At"
                    readOnly
                    value={formatDateTime(state?.provider?.createdAt)}
                    className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                  />
                </div>

                <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                  <label className="font-semibold" htmlFor="professionalTitle">
                    Professional Title
                  </label>
                  <input
                    id="professionalTitle"
                    readOnly
                    placeholder="professionalTitle "
                    value={state?.provider?.professionalTitle}
                    className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                  />
                </div>
              </div>
            )}
          </div>

          {user?.accountType === "super_admin" && (
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
          )}
        </section>
      </div>
      <div className="p-5 rounded-lg bg-white space-y-5 shadow">
        <p className="font-semibold text-xl">Applications</p>

        <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex flex-col px-5 py-5 pb-20 space-y-12">
          <OrganizationApplicationLists
            title="Approved Applications"
            data={state?.applications || []}
            fetchFunction={() => console.log("")}
            currentPage={1}
            setCurrentPage={() => console.log("")}
            totalPages={1}
          />
        </section>
      </div>
    </section>
  );
};

export default ProvidersDetails;
