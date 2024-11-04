import { Progress } from "@chakra-ui/react";

import { ApplicationProps } from "../step1";
// import HospitalAffiliations from "./hospitalaffiliations";
import Licensing from "./licensing";
import ResidenciesFellowships from "./fellowship";

const Step2 = ({
  form,
  handleDateChange,

  handleChange,
}: ApplicationProps) => {
  return (
    <div className="bg-white rounded-lg px-3 py-5 xl:p-5 space-y-4">
      <div className="space-y-1">
        <p className="font-semibold text-base ">Health Plan</p>
        <p className="text-[12px] font-medium text-[#667085]">
          Lorem Ipsum Organization
        </p>
      </div>

      <div className="">
        <Progress
          value={60}
          colorScheme="purple"
          rounded={"full"}
          size={"sm"}
        />
      </div>

      <ResidenciesFellowships
        form={form}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />

      {/* <HospitalAffiliations form={form} handleChange={handleChange} /> */}

      <Licensing
        form={form}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />
    </div>
  );
};

export default Step2;
