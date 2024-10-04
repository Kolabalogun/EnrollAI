import { Progress } from "@chakra-ui/react";
import WorkHistory from "./workhistory";
import MalpracticeInsurance from "./malpracticeInsurance";
import { ApplicationProps } from "../../applicationForm/step1";

const Step3 = ({
  form,
  removeField,
  removeSection,
  removeSubField,
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
          value={90}
          colorScheme="purple"
          rounded={"full"}
          size={"sm"}
        />
      </div>

      {form.workHistory && (
        <WorkHistory
          form={form}
          removeField={removeField}
          removeSection={removeSection}
        />
      )}

      {form.malpracticeInformation && (
        <MalpracticeInsurance
          form={form}
          removeSubField={removeSubField}
          removeSection={removeSection}
        />
      )}
    </div>
  );
};

export default Step3;
