import { ReactNode } from "react";
import SecondaryButton from "@/components/common/buttons/secondaryButton";

import { Search } from "lucide-react";

const ApplicationsPageLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-3xl">{title}</p>
      </div>

      <div className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-5 space-y-6">
        <div className="w-full flex lg:flex-row flex-col-reverse   gap-5 justify-between lg:items-center">
          <div className="hidden lg:flex flex-1">
            <p className="font-semibold text-base">{title}</p>
          </div>

          <div className="flex ">
            <div className="bg-[#f9fafb] border-fade border items-center flex rounded-full w-full py-1 px-4">
              <Search className="text-fade" size={14} />
              <input
                type="text"
                className="bg-transparent outline-none py-1 raleway text-xs px-2"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="flex  ">
            <div className="">
              <SecondaryButton
                title="Export to CSV"
                handleClick={() => console.log("")}
              />
            </div>
          </div>
        </div>

        <div className="">{children}</div>
      </div>
    </section>
  );
};

export default ApplicationsPageLayout;
