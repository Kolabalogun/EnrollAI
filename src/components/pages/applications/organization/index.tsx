/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableComponent } from "@/components/table";
import {
  AdminsTableHeads,
  AllProvidersTableHeads,
  CreatedApplicationsTableHeads,
  OrganizationApplicationFormTableHeads,
  OrganizationsTableHeads,
  ProvidersTableHeads,
} from "@/constant/data/table/tableHeads";
import { useState } from "react";
import EmptyCarts from "../../dashboard/emptyCarts";
import { useNavigate } from "react-router-dom";
import { ApplicationFormInterface } from "@/lib/types";
import { deleteProviderApplication } from "@/services/applications";
import showToast from "@/components/common/showtoast";
import { useDisclosure, useToast } from "@chakra-ui/react";
import ConfirmationModal from "@/components/modals/confirmationModal";
import LoadingCarts from "../../dashboard/loadingarts";
import {
  deleteCreatedApplications,
  toggleCreatedApplicationStatus,
} from "@/services/org/applications";

const OrganizationApplicationLists = ({
  data,
  fetchFunction,
  isLoading,
  title,
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  data?: ApplicationFormInterface[];
  fetchFunction: () => void;
  isLoading?: boolean;
  title?: string;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) => {
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    isOpen: statusIsOpen,
    onClose: statusOnClose,
    onOpen: statusOnOpen,
  } = useDisclosure();

  const [selectedRow, setSelectedRow] =
    useState<ApplicationFormInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(data);

  const handleViewDetails = (row: ApplicationFormInterface) => {
    console.log(row);
    navigate(`/dashboard/health-provider/applications/details/${row._id}`);
  };

  const handleProviderDetails = (row: any) => {
    console.log(row);
    navigate(`/dashboard/credentializing-organization/providers/details`, {
      state: JSON.stringify(row),
    });
  };

  const handleOrganizationDetails = (row: any) => {
    console.log(row);
    navigate(`/dashboard/admin/organizations/details`, {
      state: JSON.stringify(row),
    });
  };
  const handleAdminDetails = (row: any) => {
    console.log(row);
    navigate(`/dashboard/admin/details`, {
      state: JSON.stringify(row),
    });
  };

  const handleDelete = (row: any) => {
    console.log(row);
    setSelectedRow(row);
    onOpen();
  };

  const handleChangeApplicationStatus = (row: any) => {
    console.log(row);
    setSelectedRow(row);
    statusOnOpen();
  };

  const handleDeleteApplication = async (id: string) => {
    setLoading(true);
    try {
      const res = await deleteProviderApplication(id);

      if (res.success) {
        showToast(
          toast,
          "Enroll AI",
          "success",
          "Application deleted successfully"
        );
      } else {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `${res?.message || "Failed the delete Application"}`
        );
      }

      fetchFunction();
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to delete Application. Please try later"} `
      );
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const handleDeleteCreatedApplication = async (id: string) => {
    setLoading(true);
    try {
      const res = await deleteCreatedApplications(id);

      console.log(res);

      if (res.success) {
        showToast(
          toast,
          "Enroll AI",
          "success",
          "Application deleted successfully"
        );
      } else {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `${res.message || "Failed the delete Application"}`
        );
      }

      fetchFunction();
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to delete Application. Please try later"} `
      );
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const handleChangeApplicationStatusF = async (data: any) => {
    setLoading(true);
    try {
      const res = await toggleCreatedApplicationStatus(data._id);

      console.log(res);

      if (res.success) {
        showToast(
          toast,
          "Enroll AI",
          "success",
          `${
            data?.status
              ? "Application disabled successfully"
              : "Application has been activated successfully"
          } `
        );
        fetchFunction();
      } else {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `${res.message || "Failed the delete Application"}`
        );
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to delete Application. Please try later"} `
      );
    } finally {
      setLoading(false);
      statusOnClose();
    }
  };

  const columns = OrganizationApplicationFormTableHeads(handleViewDetails);

  const createdApplicationColumns = CreatedApplicationsTableHeads(
    handleDelete,
    handleChangeApplicationStatus
  );

  const providersColumns = ProvidersTableHeads(handleProviderDetails);

  // Admin Providers Page Column
  const allProvidersColumns = AllProvidersTableHeads(handleProviderDetails);

  const orgColumns = OrganizationsTableHeads(handleOrganizationDetails);

  const adminColumns = AdminsTableHeads(handleAdminDetails);

  const parsedColumns =
    title === "Created Applications"
      ? createdApplicationColumns
      : title === "Providers"
      ? providersColumns
      : title === "All Providers"
      ? allProvidersColumns
      : title === "Organizations"
      ? orgColumns
      : title === "Admins"
      ? adminColumns
      : columns;

  return (
    <div>
      <ConfirmationModal
        onClose={onClose}
        isOpen={isOpen}
        buttonText="Delete"
        isLoading={loading}
        message={`Are you sure you want to delete your application? Once deleted, it will be permanently removed from our database. ${
          title === "Created Applications" &&
          'Additionally, all provider applications associated with this application will also be deleted. If you wish to retain provider applications but stop further submissions, you can change the application status to "Active" or "Disabled" instead.'
        } `}
        onConfirm={() => {
          if (selectedRow) {
            if (title === "Created Applications") {
              handleDeleteCreatedApplication(selectedRow._id);
            } else {
              handleDeleteApplication(selectedRow._id);
            }
          }
        }}
      />

      <ConfirmationModal
        onClose={statusOnClose}
        isOpen={statusIsOpen}
        buttonText={`${
          selectedRow?.status ? "Disable" : "Activate"
        }`}
        isLoading={loading}
        message={`Are you sure you want to ${
          selectedRow?.status ? "Disable" : "Activate"
        } this application? Once ${
          selectedRow?.status ? "Disabled" : "Activated"
        }, Providers ${
          selectedRow?.status ? "won't" : "will"
        } be able to see the application. `}
        onConfirm={() => {
          if (selectedRow) {
            handleChangeApplicationStatusF(selectedRow);
          }
        }}
      />
      {isLoading ? (
        <LoadingCarts />
      ) : (
        <>
          {data?.length ? (
            <div className="flex-1 w-full md:w-auto">
              {/* Table */}
              <TableComponent
                footerTxt={""}
                columns={parsedColumns as any}
                data={data || []}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </div>
          ) : (
            <EmptyCarts />
          )}
        </>
      )}
    </div>
  );
};

export default OrganizationApplicationLists;
