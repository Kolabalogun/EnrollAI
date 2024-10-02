/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

import { TableComponent } from "@/components/table";
import { OrganizationApplicationFormTableHeads } from "@/constant/table/tableHeads";
import { ApplicationFormType } from "@/lib/types/tables";
import { useState } from "react";
import EmptyCarts from "../../dashboard/emptyCarts";
import { useNavigate } from "react-router-dom";

const OrganizationApplicationLists = ({ full }: { full?: boolean }) => {
  const { lists } = useSelector((state: any) => state.applicationForm);
  const [activeMenu, setActiveMenu] = useState<string | number | null>(null);
  const navigate = useNavigate();

  console.log(lists);

  const handleViewDetails = (row: ApplicationFormType) => {
    console.log(row);
    navigate("/dashboard/health-provider/applications/details/id");
  };

  const toggleMenu = (id: string | number | null) => {
    if (activeMenu === id) {
      setActiveMenu(null); // Close if it's already open
    } else {
      setActiveMenu(id); // Open the new menu
    }
  };

  const handleEdit = (row: ApplicationFormType) => {
    console.log(row);
  };

  const handleDelete = (row: ApplicationFormType) => {
    console.log(row);
  };

  const columns = OrganizationApplicationFormTableHeads(
    handleViewDetails,
    handleEdit,
    handleDelete,
    activeMenu,
    toggleMenu
  );

  const data = full ? lists : lists?.slice(0, 4) || [];

  return (
    <div>
      {lists?.length ? (
        <div className="flex-1 w-full md:w-auto">
          {/* Table */}
          <TableComponent footerTxt={""} columns={columns} data={data || []} />
        </div>
      ) : (
        <EmptyCarts />
      )}
    </div>
  );
};

export default OrganizationApplicationLists;
