/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import EmptyCarts from "../dashboard/emptyCarts";
import { TableComponent } from "@/components/table";
import { ApplicationFormTableHeads } from "@/constant/data/table/tableHeads";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationFormInterface } from "@/lib/types";

const ApplicationLists = ({ full }: { full?: boolean }) => {
  const { lists } = useSelector((state: any) => state.applicationForm);
  const [activeMenu, setActiveMenu] = useState<string | number | null>(null);
  const navigate = useNavigate();

  const handleViewDetails = (row: ApplicationFormInterface) => {
    console.log(row);
    navigate("/dashboard/health-provider/applications/details/id");
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
  };

  const handleDelete = (row: ApplicationFormInterface) => {
    console.log(row);
  };

  const columns = ApplicationFormTableHeads(
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

export default ApplicationLists;
