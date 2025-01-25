import { NotificationType } from "@/lib/types/tables";
import { formatDateTime } from "@/utils/formatDateTime";
import { ColumnDef } from "@tanstack/react-table";

export const notificationColumns: ColumnDef<NotificationType>[] = [
  // {
  //   accessorKey: "read",
  //   header: () => <div>Read</div>,
  //   cell: ({ row }) => (
  //     <div
  //       className={`w-3 h-3 mx-4 rounded-full ${
  //         row.getValue("read") ? "bg-secondary" : "bg-fade"
  //       } `}
  //     />
  //   ),
  // },

  {
    accessorKey: "actionType",
    header: () => <div>Title</div>,
    cell: ({ row }) => (
      <p className="font-semibold capitalize w-32 xl:w-full text-sm">
        {row.getValue("actionType")}
      </p>
    ),
  },
  {
    accessorKey: "actionType",
    header: () => <div>Status</div>,
    cell: ({ row }) => (
      <p
        className={`p-1 ${
          row.getValue("actionType") === "login"
            ? "bg-[#ccf0eb] text-green"
            : row.getValue("actionType") === "login"
            ? "text-[#fd9a56] bg-[#ffebdd]"
            : row.getValue("actionType") === "profile-update"
            ? "text-[#d456fd] bg-[#f6ddff]"
            : row.getValue("actionType") === "delete-application"
            ? "text-[#fb0000] bg-red-500/30"
            : "text-[#5a8cff] bg-[#dee8ff]"
        } font-semibold text-[11px] text-center rounded-md w-20 `}
      >
        {row.getValue("actionType")}
      </p>
    ),
  },

  {
    accessorKey: "actionDetails",
    header: () => <div>Description</div>,
    cell: ({ row }) => (
      <p className="font-semibold w-48 xl:w-full text-xs">
        {row.getValue("actionDetails")}
      </p>
    ),
  },
  {
    accessorKey: "timestamp",
    header: () => <div>Date</div>,
    cell: ({ row }) => (
      <p className="font-semibold w-32 xl:w-full text-xs">
        {formatDateTime(row.getValue("timestamp"))}
      </p>
    ),
  },
];
