import { useEffect, useRef } from "react";
import { EllipsisVertical } from "lucide-react";
import { BillingTransactionsType } from "@/lib/types/tables";
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
  row: BillingTransactionsType;
  handleEdit: (row: BillingTransactionsType) => void;
  handleDelete: (row: BillingTransactionsType) => void;
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

export const DetailsCell = ({ row }: { row: BillingTransactionsType }) => {
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
export const BillingTableHeads = (
  handleViewDetails: (row: BillingTransactionsType) => void,
  handleEdit: (row: BillingTransactionsType) => void,
  handleDelete: (row: BillingTransactionsType) => void,
  activeMenu: string | number | null,
  toggleMenu: (id: string | number | null) => void
): TableColumn<BillingTransactionsType>[] => [
  {
    header: "Invoice",
    accessor: (row) => (
      <div className="space-y-1">
        <p className="text-dark-200 font-medium text-sm">{row.invoice}</p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Date",
    accessor: (row) => (
      <div className="space-y-1">
        <p className="font-semibold py-4  text-sm">{row.date}</p>
      </div>
    ),
    className: "text-center font-medium",
    headClassName: "text-center     font-medium",
  },
  {
    header: "Amount",
    accessor: (row) => (
      <div className="space-y-1">
        <p className="  font-semibold text-sm">{row.amount}</p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Status",
    accessor: (row) => (
      <div className="self-center text-sm  text-center items-center justify-center flex gap-2 font-medium p-0.5 rounded-full  w-32 border-[#21A0A0] text-[#21A0A0] border bg-[#d3ecec] ">
        {row.status}
      </div>
    ),
    className: "",
    headClassName: "",
  },
  // {
  //   header: "Details",
  //   accessor: (row) => <DetailsCell row={row} />,
  //   className: "text-center",
  //   headClassName: "text-center",
  // },
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
