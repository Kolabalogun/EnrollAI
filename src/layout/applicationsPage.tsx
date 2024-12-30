/* eslint-disable @typescript-eslint/no-explicit-any */
import SecondaryButton from "@/components/common/buttons/secondaryButton";
import { ApplicationFormInterface } from "@/lib/types";
import { Search } from "lucide-react";
import { ReactNode } from "react";
import { CSVLink } from "react-csv";

const ApplicationsPageLayout = ({
  children,
  title,
  handleSearch,
  filteredData,
  headers,
}: {
  children: ReactNode;
  title: string;
  handleSearch: (value: string) => void;
  filteredData: ApplicationFormInterface[];
  headers?: any;
}) => {
  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-3xl">{title}</p>
      </div>

      <div className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-5 space-y-6">
        <div className="w-full flex lg:flex-row flex-col-reverse gap-5 justify-between lg:items-center">
          <div className="hidden lg:flex flex-1">
            <p className="font-semibold text-base">{title}</p>
          </div>

          <div className="flex">
            <div className="bg-[#f9fafb] border-fade border items-center flex rounded-full w-full py-1 px-4">
              <Search className="text-fade" size={14} />
              <input
                type="text"
                className="bg-transparent outline-none py-1 raleway text-xs w-full px-2"
                placeholder="Search..."
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex">
            <div className="  :">
              <CSVLink
                data={filteredData}
                headers={headers}
                filename={"applications.csv"}
              >
                <SecondaryButton title="Export to CSV" handleClick={() => {}} />
              </CSVLink>
            </div>
          </div>
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
};

export default ApplicationsPageLayout;
