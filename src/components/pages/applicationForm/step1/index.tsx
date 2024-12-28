/* eslint-disable @typescript-eslint/no-explicit-any */
import { Progress } from "@chakra-ui/react";

import PersonalInformations from "./personalInformations";
// import ProfessionalID from "./professionalID";
import Education from "./education";
import PracticeLocation from "./practicelocation";

export type ApplicationProps = {
  form: any;
  handleDateChange?: any;
  handleCheckBoxChange?: any;
  handlePhoneChange?: any;
  disableForm?: boolean;
  handleChange?: any;
  removeField?: any;
  removeSection?: any;
  removeSubField?: any;
  errors?: any;
  handleResidencyChange?: any;
  handleFileChange?: any;
};

const Step1 = ({ form, errors, handleChange }: ApplicationProps) => {
  console.log(errors, "errors errors");

  return (
    <div className="bg-white rounded-lg px-3 py-5 xl:p-5 space-y-4">
      <div className="space-y-1">
        <p className="font-semibold text-base ">{form?.applicationType}</p>
        <p className="text-[12px] font-medium text-[#667085]">
          {form?.organizationName} - {form?.applicationTitle}
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
        errors={errors}
        handleChange={handleChange}
      />

      <PracticeLocation
        form={form}
        errors={errors}
        handleChange={handleChange}
      />

      {/* <ProfessionalID form={form} handleChange={handleChange} /> */}

      <Education form={form} errors={errors} handleChange={handleChange} />
    </div>
  );
};

export default Step1;
