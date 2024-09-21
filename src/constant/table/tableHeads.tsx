import { useEffect, useRef } from "react";
import { EllipsisVertical } from "lucide-react";
import { ApplicationFormType } from "@/lib/types/tables";
import { TableColumn } from "@/components/table";
import { formatDateTime } from "@/utils/formatDateTime";
import { HEALTHCARE_APPLICATIONS_DETALIS } from "@/router/routes";
import { useNavigate } from "react-router-dom";

export const ActionCell = ({
  row,
  handleEdit,
  handleDelete,
  isMenuVisible,
  toggleMenu,
}: {
  row: ApplicationFormType;
  handleEdit: (row: ApplicationFormType) => void;
  handleDelete: (row: ApplicationFormType) => void;
  isMenuVisible: boolean;
  toggleMenu: (id: string | number | null) => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

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
        onClick={() => toggleMenu(row.id)} // Pass row.id to toggleMenu
        className="cursor-pointer flex items-center z-[1001] justify-center"
      >
        <EllipsisVertical size={18} className="text-text-primary" />
      </div>

      {/* Dropdown Menu */}
      {isMenuVisible && (
        <div className="absolute right-10 bottom-3   z-[1001] mt-2 w-32 bg-white border rounded shadow-lg  ">
          <ul className="text-left">
            <li
              onClick={() => handleEdit(row)}
              className="cursor-pointer raleway text-xs font-semibold  px-4 py-2 hover:bg-gray-200"
            >
              View Details
            </li>
            <li
              onClick={() => handleEdit(row)}
              className="cursor-pointer raleway text-xs font-semibold  px-4 py-2 hover:bg-gray-200"
            >
              Edit
            </li>
            <li
              onClick={() => handleDelete(row)}
              className="cursor-pointer raleway text-xs font-semibold  px-4 py-2 hover:bg-gray-200"
            >
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export const DetailsCell = ({ row }: { row: ApplicationFormType }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${HEALTHCARE_APPLICATIONS_DETALIS}/${row.id}`)}
      className="  text-xs  text-center items-center justify-center flex gap-2 font-medium text-[#667085]  cursor-pointer  "
    >
      View Details
    </div>
  );
};

// Table column definition
export const ApplicationFormTableHeads = (
  handleViewDetails: (row: ApplicationFormType) => void,
  handleEdit: (row: ApplicationFormType) => void,
  handleDelete: (row: ApplicationFormType) => void,
  activeMenu: string | number | null,
  toggleMenu: (id: string | number | null) => void
): TableColumn<ApplicationFormType>[] => [
  {
    header: "Application",
    accessor: (row) => (
      <div className="space-y-1">
        <p className="font-semibold text-xs">Credentialing Request</p>
        <p className="text-fade font-medium text-xs">
          lorem ipsum organization {row.application}{" "}
        </p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Date",
    accessor: (row) => (
      <div className="space-y-1">
        <p className="font-semibold py-4  text-xs">
          {formatDateTime(row.date)}
        </p>
      </div>
    ),
    className: "text-center font-medium",
    headClassName: "text-center     font-medium",
  },
  {
    header: "Status",
    accessor: (row) => (
      <div className="self-center text-xs  text-center items-center justify-center flex gap-2 font-medium p-0.5 rounded-full  w-32 border-[#21A0A0] text-[#21A0A0] border bg-[#d3ecec] ">
        {row.status}
      </div>
    ),
    className: "",
    headClassName: "",
  },
  {
    header: "Details",
    accessor: (row) => <DetailsCell row={row} />,
    className: "text-center",
    headClassName: "text-center",
  },
  {
    header: "Actions",
    accessor: (row) => (
      <ActionCell
        row={row}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        isMenuVisible={activeMenu === row.id}
        toggleMenu={toggleMenu}
      />
    ),
    className: "p-2.5",
    headClassName: "text-center",
  },
];
