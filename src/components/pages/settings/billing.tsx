/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitButton } from "@/components/common";
import { TableComponent } from "@/components/table";
import { BillingTransactions } from "@/constant/data/billingdata";
import { BillingTableHeads } from "@/constant/table/billingHead";
import { BillingTransactionsType } from "@/lib/types/tables";
import { HEALTHCARE_BILLING_ADD } from "@/router/routes";
import { DownloadIcon } from "lucide-react";
import { useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Billing = () => {
  const navigate = useNavigate();
  //   const { billingsInfos } = useSelector((state: any) => state.billingInfo);
  const [activeMenu, setActiveMenu] = useState<string | number | null>(null);

  const handleViewDetails = (row: BillingTransactionsType) => {
    console.log(row);
  };

  const toggleMenu = (id: string | number | null) => {
    if (activeMenu === id) {
      setActiveMenu(null); // Close if it's already open
    } else {
      setActiveMenu(id); // Open the new menu
    }
  };

  const handleEdit = (row: BillingTransactionsType) => {
    console.log(row);
  };

  const handleDelete = (row: BillingTransactionsType) => {
    console.log(row);
  };

  const columns = BillingTableHeads(
    handleViewDetails,
    handleEdit,
    handleDelete,
    activeMenu,
    toggleMenu
  );

  return (
    <section className="  flex-1 h-full w-full flex flex-col px-5 py-5 pb-10 space-y-12">
      <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex  justify-between px-5 py-5  ">
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-3">
            <p className="text-dark-200 font-semibold  ">Subscription</p>
            <p className="text-xs text-dark-200 ">Monthly Plan</p>
          </div>

          <p className="text-dark-200   ">
            Next payment is to be charged on{" "}
            <span className="font-semibold">September 08, 2024</span>
          </p>
        </div>

        <div className="flex gap-5 items-center">
          <button className="font-semibold text-sm w-full text-red-500">
            Cancel Subscription
          </button>
          <SubmitButton type="button">Renew Subscription</SubmitButton>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex items-center justify-between px-5 py-5  ">
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-3">
            <p className="text-dark-200 font-semibold  ">Payment Method</p>
            <p className="text-sm text-dark-200 ">
              Choose your preferred payment method for making future payments.
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <SubmitButton
            handleSubmit={() => navigate(HEALTHCARE_BILLING_ADD)}
            className="border-0"
            type="button"
          >
            Add New Payment
          </SubmitButton>
        </div>
      </section>

      <section className="  space-y-3   py-5  ">
        <div className="flex items-center justify-between gap-10">
          <p className="text-dark-200 font-semibold text-2xl  ">
            Latest Transaction
          </p>

          <div className="">
            <button className="flex gap-2 text-fade p-3 border-2 rounded-lg raleway font-semibold text-[13px]">
              <DownloadIcon size={18} /> Download CSV{" "}
            </button>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex-1 bg-white rounded-lg p-5 w-full md:w-auto">
            {/* Table */}
            <TableComponent
              footerTxt={""}
              columns={columns}
              data={BillingTransactions || []}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Billing;
