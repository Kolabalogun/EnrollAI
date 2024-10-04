import { Progress } from "@chakra-ui/react";
import { ApplicationProps } from "../step1";
import WorkHistory from "./workhistory";
import MalpracticeInsurance from "./malpracticeInsurance";
import AdditionalDocument from "./additionalDocument";

const Step3 = ({ form, handleDateChange, handleChange }: ApplicationProps) => {
  return (
    <div className="bg-white rounded-lg p-5 space-y-4">
      <div className="space-y-1">
        <p className="font-semibold text-base ">Health Plan</p>
        <p className="text-[12px] font-medium text-[#667085]">
          Lorem Ipsum Organization
        </p>
      </div>

      <div className="">
        <Progress
          value={90}
          colorScheme="purple"
          rounded={"full"}
          size={"sm"}
        />
      </div>

      <WorkHistory
        form={form}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />

      <MalpracticeInsurance form={form} handleChange={handleChange} />

      <AdditionalDocument form={form} handleChange={handleChange} />
    </div>
  );
};

export default Step3;
