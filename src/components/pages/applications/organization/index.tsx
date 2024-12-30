/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableComponent } from "@/components/table";
import { OrganizationApplicationFormTableHeads } from "@/constant/data/table/tableHeads";

import { useState } from "react";
import EmptyCarts from "../../dashboard/emptyCarts";
import { useNavigate } from "react-router-dom";
import { ApplicationFormInterface } from "@/lib/types";
import { deleteProviderApplication } from "@/services/applications";
import showToast from "@/components/common/showtoast";
import { useDisclosure, useToast } from "@chakra-ui/react";
import ConfirmationModal from "@/components/modals/confirmationModal";
import LoadingCarts from "../../dashboard/loadingarts";

const OrganizationApplicationLists = ({
  full,
  data,
  fetchFunction,
  isLoading,
}: {
  full?: boolean;
  data?: ApplicationFormInterface[];
  fetchFunction: () => void;
  isLoading?: boolean;
}) => {
  const [activeMenu, setActiveMenu] = useState<string | number | null>(null);
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [selectedRow, setSelectedRow] =
    useState<ApplicationFormInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(data);

  const handleViewDetails = (row: ApplicationFormInterface) => {
    console.log(row);
    navigate(`/dashboard/health-provider/applications/details/${row._id}`);
  };

  const toggleMenu = (id: string | number | null) => {
    if (activeMenu === id) {
      setActiveMenu(null);
    } else {
      setActiveMenu(id);
    }
  };

  const handleEdit = (row: ApplicationFormInterface) => {
    console.log(row);
    navigate(`/dashboard/health-provider/applications/details/${row._id}`);
  };

  const handleDelete = (row: ApplicationFormInterface) => {
    console.log(row);
    setSelectedRow(row);
    onOpen();
    setActiveMenu(null);
  };

  const handleDeleteApplication = async (id: string) => {
    setLoading(true);
    try {
      const res = await deleteProviderApplication(id);

      console.log(res);

      showToast(
        toast,
        "Enroll AI",
        "success",
        "Application deleted successfully"
      );

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

  const columns = OrganizationApplicationFormTableHeads(
    handleViewDetails,
    handleEdit,
    handleDelete,
    activeMenu,
    toggleMenu
  );

  const dataa = full ? data : data?.slice(0, 4) || [];

  console.log(dataa, "dataa");

  return (
    <div>
      <ConfirmationModal
        onClose={onClose}
        isOpen={isOpen}
        buttonText="Delete"
        isLoading={loading}
        message="Are you sure you want to delete your application? Once deleted, it will be permanently removed from our database."
        onConfirm={() => {
          if (selectedRow) handleDeleteApplication(selectedRow._id);
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
                columns={columns}
                data={dataa || []}
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
