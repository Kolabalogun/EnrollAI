/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import {
  CheckCircle,
  EllipsisVertical,
  Eye,
  Pen,
  Trash2Icon,
  X,
} from "lucide-react";

import { TableColumn } from "@/components/table";
import { formatDateTime } from "@/utils/formatDateTime";
import { HEALTHCARE_APPLICATIONS_DETALIS } from "@/router/routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ApplicationFormInterface, CreatedApplicationType } from "@/lib/types";

export const ActionCell = ({
  row,
  handleEdit,
  handleViewDetails,
  handleDelete,
  isMenuVisible,
  toggleMenu,
}: {
  handleViewDetails: (row: ApplicationFormInterface) => void;
  row: ApplicationFormInterface;
  handleEdit: (row: ApplicationFormInterface) => void;
  handleDelete: (row: ApplicationFormInterface) => void;
  isMenuVisible: boolean;
  toggleMenu: (id: string | number | null) => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const { accountType } = useSelector((state: any) => state.auth);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu(null); // Close the menu if click is outside
      }
    };

    if (isMenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuVisible, toggleMenu]);

  return (
    <div className="relative " ref={menuRef}>
      <div
        onClick={() => toggleMenu(row._id)}
        className="cursor-pointer flex items-center z-[1001] justify-center"
      >
        <EllipsisVertical size={18} className="text-text-primary" />
      </div>

      {/* Dropdown Menu */}
      {isMenuVisible && (
        <div className="absolute right-10 -bottom-16   z-[1001] mt-2 w-52 bg-white border rounded shadow-lg  ">
          <ul className="text-left">
            <li
              onClick={() => handleViewDetails(row)}
              className="cursor-pointer raleway text-xs font-semibold  px-4 py-3 flex items-center gap-3 hover:bg-gray-200"
            >
              <Eye color="blue" size={15} />
              View Application
            </li>
            {accountType !== "provider" ? (
              <>
                {row?.status !== "approved" && (
                  <li
                    onClick={() => handleEdit(row)}
                    className="cursor-pointer raleway text-xs font-semibold  px-4 py-3 hover:bg-gray-200 flex items-center gap-3"
                  >
                    <CheckCircle color="green" size={15} />
                    Approve Application
                  </li>
                )}
              </>
            ) : (
              <li
                onClick={() => handleEdit(row)}
                className="cursor-pointer raleway text-xs font-semibold  px-4 py-3 hover:bg-gray-200 flex items-center gap-3"
              >
                <Pen color="blue" size={15} />
                Edit
              </li>
            )}

            <li
              onClick={() => handleDelete(row)}
              className="cursor-pointer raleway text-xs font-semibold  px-4 py-3 flex items-center gap-3 hover:bg-gray-200"
            >
              <X color="red" size={15} />
              Delete Application
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export const DetailsCell = ({ row }: { row: ApplicationFormInterface }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${HEALTHCARE_APPLICATIONS_DETALIS}/${row._id}`)}
      className="  text-xs w-32 xl:w-full text-center items-center justify-center flex gap-2 font-medium text-[#667085]  cursor-pointer  "
    >
      View Details
    </div>
  );
};

// Table column definition
export const ApplicationFormTableHeads = (
  handleViewDetails: (row: ApplicationFormInterface) => void,
  handleEdit: (row: ApplicationFormInterface) => void,
  handleDelete: (row: ApplicationFormInterface) => void,
  activeMenu: string | number | null,
  toggleMenu: (id: string | number | null) => void
): TableColumn<ApplicationFormInterface>[] => [
  {
    header: "Application",
    accessor: (row) => (
      <div className="space-y-1 w-32 xl:w-full ">
        <p className="font-semibold text-xs">Credentialing Request</p>
        <p className="text-fade font-medium text-xs">
          {row?.organizationName} - {row?.applicationType}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Date",
    accessor: (row) => (
      <div className="space-y-1 w-32 xl:w-full">
        <p className="font-semibold py-3  text-xs">
          {formatDateTime(row.createdAt) ?? "N/A"}
        </p>
      </div>
    ),
    className: "text-center font-medium",
    headClassName: "text-center     font-medium",
  },
  {
    header: "Status",
    accessor: (row) => (
      <div className="self-center text-xs  text-center items-center justify-center flex gap-2 font- p-0.5 rounded-full  w-32 border-[#21A0A0] text-[#21A0A0] border bg-[#d3ecec] ">
        {row.status}
      </div>
    ),
    className: "",
    headClassName: "",
  },
  {
    header: "Details",
    accessor: (row) => <DetailsCell row={row} />,
    className: "text-center ",
    headClassName: "text-center ",
  },
  {
    header: "Actions",
    accessor: (row) => (
      <ActionCell
        row={row}
        handleEdit={handleEdit}
        handleViewDetails={handleViewDetails}
        handleDelete={handleDelete}
        isMenuVisible={activeMenu === row._id}
        toggleMenu={toggleMenu}
      />
    ),
    className: "p-2.5",
    headClassName: "text-center",
  },
];

// Table column definition
export const OrganizationApplicationFormTableHeads = (
  handleViewDetails: (row: ApplicationFormInterface) => void,
  handleEdit: (row: ApplicationFormInterface) => void,
  handleDelete: (row: ApplicationFormInterface) => void,
  activeMenu: string | number | null,
  toggleMenu: (id: string | number | null) => void
): TableColumn<ApplicationFormInterface>[] => [
  {
    header: "Provider Name",
    accessor: (row) => (
      <div className="space-y-1 w-32 xl:w-full">
        <p className="font-semibold text-xs">
          {row?.step1?.personalInformation?.firstName}{" "}
          {row?.step1?.personalInformation?.lastName}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Organzation Name",
    accessor: (row) => (
      <div className="  w-32 xl:w-full">
        <p className="font-semibold text-xs">
          {row?.organizationName ?? "N/A"}
        </p>
      </div>
    ),
    flex: 2,
  },

  {
    header: "Application Type",
    accessor: (row) => (
      <div className="space-y-1 w-32 xl:w-full">
        <p className="font-semibold text-xs">{row?.applicationType || "N.A"}</p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Application Title",
    accessor: (row) => (
      <div className="  w-32 xl:w-full">
        <p className="font-medium text-gray-600 text-xs">
          {row?.applicationTitle}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Date",
    accessor: (row) => (
      <div className="space-y-1 w-32 xl:w-full">
        <p className="font-semibold py-3  text-xs">
          {formatDateTime(row.createdAt, true) ?? "N/A"}
        </p>
      </div>
    ),
    className: " font-medium",
    headClassName: "     font-medium",
  },
  {
    header: "Status",
    accessor: (row) => (
      <div
        className={`self-center text-xs   items-center justify-center flex gap-2 font-medium p-0.5 rounded-full capitalize  w-32 ${
          row?.status === "approved"
            ? "border-[#21A0A0] text-[#21A0A0] bg-[#d3ecec] "
            : row?.status === "pending"
            ? "border-yellow-500 text-yellow-500 bg-yellow-500/10"
            : "border-[#fb0000] text-[#fb0000]"
        } border `}
      >
        {row.status}
      </div>
    ),
    className: "",
    headClassName: "",
  },

  {
    header: "Actions",
    accessor: (row) => (
      <ActionCell
        row={row}
        handleEdit={handleEdit}
        handleViewDetails={handleViewDetails}
        handleDelete={handleDelete}
        isMenuVisible={activeMenu === row._id}
        toggleMenu={toggleMenu}
      />
    ),
    className: "p-2.5",
    headClassName: "text-center",
  },
];

export const CreatedApplicationsTableHeads = (
  handleDelete: (row: CreatedApplicationType) => void
): TableColumn<CreatedApplicationType>[] => [
  {
    header: "Application Title",
    accessor: (row) => (
      <div className="space-y-1 w-32 xl:w-full">
        <p className="font-semibold capitalize text-xs">
          {row?.applicationTitle ?? "N/A"}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Application Type",
    accessor: (row) => (
      <div className="w-32 xl:w-full">
        <p className="font-semibold capitalize text-xs">
          {row?.applicationName ?? "N/A"}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Created At",
    accessor: (row) => (
      <div className="space-y-1 w-32 xl:w-full">
        <p className="font-semibold text-xs">
          {formatDateTime(row?.createdAt)}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Actions",
    accessor: (row) => (
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => handleDelete(row)}
          className="text-red-500 hover:text-red-700 flex items-center"
        >
          <span className="text-sm ml-1">
            <Trash2Icon />
          </span>
        </button>
      </div>
    ),
    className: "p-2.5 text-center",
    headClassName: "text-center",
  },
];

export const ProvidersTableHeads = (
  handleProviderDetails: (row: any) => void
): TableColumn<any>[] => [
  {
    header: "Provider Name",
    accessor: (row) => (
      <div className="space-y-1 w-32 xl:w-full">
        <p className="font-semibold capitalize text-xs">
          {row?.user?.fullName ?? "N/A"}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Email",
    accessor: (row) => (
      <div className="w-32 xl:w-full">
        <p className="font-semibold  lowercase text-xs">
          {row?.user.email ?? "N/A"}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Professional Title",
    accessor: (row) => (
      <div className="w-32 xl:w-full">
        <p className="font-semibold capitalize text-xs">
          {row?.user?.professionalTitle ?? "N/A"}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Date Applied",
    accessor: (row) => (
      <div className="space-y-1 w-32 xl:w-full">
        <p className="font-semibold text-xs">
          {formatDateTime(row?.applications[0]?.createdAt)}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Status",
    accessor: (row) => (
      <div
        className={`self-center text-xs   items-center justify-center flex gap-2 font-medium p-0.5 rounded-full capitalize  w-32 ${
          row?.applications[0]?.status === "approved"
            ? "border-[#21A0A0] text-[#21A0A0] bg-[#d3ecec] "
            : row?.applications[0]?.status === "pending"
            ? "border-yellow-500 text-yellow-500 bg-yellow-500/10"
            : "border-[#fb0000] text-[#fb0000]"
        } border `}
      >
        {row?.applications[0]?.status}
      </div>
    ),
    className: "",
    headClassName: "",
  },
  {
    header: "View Details",
    accessor: (row) => (
      <div
        onClick={() => handleProviderDetails(row)}
        className="space-y-1 w-32 xl:w-full"
      >
        <p className="font-semibold cursor-pointer text-xs">View Details</p>
      </div>
    ),
    className: "",
    headClassName: "",
  },
];
