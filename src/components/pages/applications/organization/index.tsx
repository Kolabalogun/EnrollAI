import { TableComponent } from "@/components/table";
import { OrganizationApplicationFormTableHeads } from "@/constant/data/table/tableHeads";
import { ApplicationFormType } from "@/lib/types/tables";
import { useState } from "react";
import EmptyCarts from "../../dashboard/emptyCarts";
import { useNavigate } from "react-router-dom";
import { ApplicationFormInterface } from "@/lib/types";

const OrganizationApplicationLists = ({
  full,
  data,
}: {
  full?: boolean;
  data?: ApplicationFormInterface[];
}) => {
  const [activeMenu, setActiveMenu] = useState<string | number | null>(null);
  const navigate = useNavigate();

  console.log(data);

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

  const dataa = full ? data : data?.slice(0, 4) || [];

  console.log(dataa, "dataa");

  return (
    <div>
      {data?.length ? (
        <div className="flex-1 w-full md:w-auto">
          {/* Table */}
          <TableComponent footerTxt={""} columns={columns} data={dataa || []} />
        </div>
      ) : (
        <EmptyCarts />
      )}
    </div>
  );
};

export default OrganizationApplicationLists;
