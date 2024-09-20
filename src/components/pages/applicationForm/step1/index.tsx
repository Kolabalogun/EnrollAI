/* eslint-disable @typescript-eslint/no-explicit-any */
import { Progress } from "@chakra-ui/react";

import PersonalInformations from "./personalInformations";
import ProfessionalID from "./professionalID";
import Education from "./education";

export type ApplicationProps = {
  form: any;
  handleDateChange?: any;
  handleCheckBoxChange?: any;
  handlePhoneChange?: any;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const Step1 = ({
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
          value={30}
          colorScheme="purple"
          rounded={"full"}
          size={"sm"}
        />
      </div>

      <PersonalInformations
        form={form}
        handleChange={handleChange}
        handlePhoneChange={handlePhoneChange}
        handleDateChange={handleDateChange}
      />

      <ProfessionalID form={form} handleChange={handleChange} />

      <Education form={form} handleChange={handleChange} />
    </div>
  );
};

export default Step1;
