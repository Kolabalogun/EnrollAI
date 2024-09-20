import { Progress } from "@chakra-ui/react";
import PracticeLocation from "./practicelocation";
import { ApplicationProps } from "../step1";
import HospitalAffiliations from "./hospitalaffiliations";
import Licensing from "./licensing";

const Step2 = ({
  form,
  handleDateChange,
  handlePhoneChange,
  handleChange,
}: ApplicationProps) => {
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
          value={60}
          colorScheme="purple"
          rounded={"full"}
          size={"sm"}
        />
      </div>

      <PracticeLocation
        form={form}
        handleChange={handleChange}
        handlePhoneChange={handlePhoneChange}
        handleDateChange={handleDateChange}
      />

      <HospitalAffiliations form={form} handleChange={handleChange} />

      <Licensing
        form={form}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />
    </div>
  );
};

export default Step2;
