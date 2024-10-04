import { Progress } from "@chakra-ui/react";
import PracticeLocation from "./practicelocation";
import HospitalAffiliations from "./hospitalaffiliations";
import Licensing from "./licensing";
import { ApplicationProps } from "../../applicationForm/step1";

const Step2 = ({
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
          value={60}
          colorScheme="purple"
          rounded={"full"}
          size={"sm"}
        />
      </div>
      {form.practiceLocation && (
        <PracticeLocation
          form={form}
          removeField={removeField}
          removeSection={removeSection}
          removeSubField={removeSubField}
        />
      )}
      {form.hospitalAffiliation && (
        <HospitalAffiliations
          form={form}
          removeField={removeField}
          removeSection={removeSection}
        />
      )}

      {form.licensing && (
        <Licensing
          form={form}
          removeField={removeField}
          removeSection={removeSection}
          removeSubField={removeSubField}
        />
      )}
    </div>
  );
};

export default Step2;
