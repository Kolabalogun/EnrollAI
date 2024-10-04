import { Progress } from "@chakra-ui/react";

import Education from "./education";
import PersonalInformationsTemplate from "./personalInformations";
import { ApplicationProps } from "../../applicationForm/step1";
import ProfessionalIDTemplate from "./professionalID";

const Step1 = ({
  form,
  removeField,
  removeSection,
  removeSubField,
}: ApplicationProps) => {
  return (
    <div className="bg-white rounded-lg p-3 lg:p-5 space-y-4">
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

      {form.personalInformation && (
        <PersonalInformationsTemplate
          form={form}
          removeField={removeField}
          removeSection={removeSection}
        />
      )}

      {form.professionID && (
        <ProfessionalIDTemplate
          form={form}
          removeField={removeField}
          removeSection={removeSection}
        />
      )}
      {form.educationInformation && (
        <Education
          form={form}
          removeField={removeField}
          removeSection={removeSection}
          removeSubField={removeSubField}
        />
      )}
    </div>
  );
};

export default Step1;
