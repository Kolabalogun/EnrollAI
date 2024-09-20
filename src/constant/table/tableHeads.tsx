import { TableColumn } from "@/components/table";
import { ApplicationFormType } from "@/lib/types/tables";

import { formatDateTime } from "@/utils/formatDateTime";
import { EllipsisVertical } from "lucide-react";

export const ApplicationFormTableHeads = (
  handleViewDetails: (row: ApplicationFormType) => void
): TableColumn<ApplicationFormType>[] => [
  {
    header: "Application",
    accessor: (row) => (
      <div className=" space-y-1">
        <p className="font-semibold text-xs">{row.application} </p>
        <p> {row.description}</p>
      </div>
    ),
    flex: 2,
  },
  {
    header: "Date",
    accessor: (row) => (
      <div className=" space-y-1">
        <p className="font-semibold text-xs">{formatDateTime(row.date)} </p>
      </div>
    ),
    className: "text-center font-medium",
    headClassName: "text-center font-medium",
  },
  {
    header: "Status",
    accessor: (row) => (
      <div className="w-full items-center justify-center flex gap-2 font-medium">
        {row.status}
      </div>
    ),
    className: "text-center font-medium",
    headClassName: "text-center font-medium",
  },
  {
    header: "Actions",
    accessor: () => (
      <div className="cursor-pointer flex items-center justify-center">
        <EllipsisVertical size={18} className="text-text-primary" />
      </div>
    ),

    className: " p-2.5 ",
    headClassName: "text-center",
  },
];
