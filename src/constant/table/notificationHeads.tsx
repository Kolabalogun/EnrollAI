import { NotificationType } from "@/lib/types/tables";
import { ColumnDef } from "@tanstack/react-table";

export const notificationColumns: ColumnDef<NotificationType>[] = [
  {
    accessorKey: "read",
    header: () => <div>Read</div>,
    cell: ({ row }) => (
      <div
        className={`w-3 h-3 rounded-full ${
          row.getValue("read") ? "bg-secondary" : "bg-fade"
        } `}
      />
    ),
  },

  {
    accessorKey: "title",
    header: () => <div>Title</div>,
    cell: ({ row }) => (
      <p className="font-semibold text-sm">{row.getValue("title")}</p>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div>Status</div>,
    cell: ({ row }) => (
      <p
        className={`p-1 ${
          row.getValue("status") === "Approved"
            ? "bg-[#ccf0eb] text-green"
            : row.getValue("status") === "Draft"
            ? "text-[#fd9a56] bg-[#ffebdd]"
            : row.getValue("status") === "Update"
            ? "text-[#d456fd] bg-[#f6ddff]"
            : "text-[#5a8cff] bg-[#dee8ff]"
        } font-semibold text-[12px] text-center rounded-md w-20 `}
      >
        {row.getValue("status")}
      </p>
    ),
  },

  {
    accessorKey: "desc",
    header: () => <div>Description</div>,
    cell: ({ row }) => (
      <p className="font-semibold text-xs">{row.getValue("desc")}</p>
    ),
  },
  {
    accessorKey: "date",
    header: () => <div>Date</div>,
    cell: ({ row }) => (
      <p className="font-semibold text-xs">{row.getValue("date")}</p>
    ),
  },
];
