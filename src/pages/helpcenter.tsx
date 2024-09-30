import { CircleAlert, Headset, Search } from "lucide-react";
import { accordionDummyData, helps } from "../constant/data/helpdata.ts";
import CustomAccordion from "@/components/pages/helpcenter/accordion.tsx";
import { SubmitButton } from "@/components/common/index.tsx";

const HelpCenter = () => {
  return (
    <section className="flex space-y-6   mb-20 relative flex-col">
      <div className="p-8 flex items-center flex-col space-y-2 justify-center">
        <h1 className="raleway font-bold text-4xl ">
          Hi, how can we <span className="text-secondary">help?</span>
        </h1>
        <p className="font-semibold text-sm text-[#333333] ">
          Got questions about using Enroll AI? We’re here to help you.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-[#f5f6fa] border-fade border-2 items-center flex rounded-xl w-96 py-2 px-4">
          <Search className="text-fade" size={14} />
          <input
            type="text"
            className="bg-transparent outline-none py-2 raleway text-xs px-2"
            placeholder="Search for articles  here..."
          />
        </div>
      </div>

      <div className="bg-[#f7f2f7]  px-9 py-16 rounded-xl grid place-content-between gap-10 grid-cols-3">
        {helps.map((help) => (
          <div className="py-8 px-5 bg-white rounded-xl flex items-start flex-col space-y-6">
            <div className="bg-[#e9d2f4]  rounded-full p-2">
              <CircleAlert color="#a26ad7" size={18} />
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-base">{help.title}</p>
              <p className="font-medium text-xs">{help.desc}</p>
            </div>

            <button
              className="font-semibold raleway text-xs underline"
              type="button"
            >
              See details
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-6 py-10">
        <div className="p-8 flex items-center flex-col space-y-2 justify-center">
          <h1 className="raleway font-bold text-4xl ">
            Frequently asked questions
          </h1>
          <p className="font-medium text-sm text-fade ">
            Our website has a lift of Question and answer that aim to provide
            clarity on the use of our product
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {accordionDummyData.map((accordion) => (
            <CustomAccordion data={accordion} />
          ))}
        </div>
      </div>

      <div className="flex justify-end items-end  ">
        <SubmitButton type="button" className="w-auto">
          <div className="flex gap-3 font-medium items-center ">
            <Headset color="white" />
            <p>Support</p>
          </div>
        </SubmitButton>
      </div>
    </section>
  );
};

export default HelpCenter;
