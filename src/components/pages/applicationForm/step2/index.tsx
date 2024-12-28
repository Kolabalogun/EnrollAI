import { Progress } from "@chakra-ui/react";

import { ApplicationProps } from "../step1";
// import HospitalAffiliations from "./hospitalaffiliations";
import Licensing from "./licensing";
import ResidenciesFellowships from "./fellowship";

const Step2 = ({
  form,
  errors,
  handleChange,
  handleResidencyChange,
  handleFileChange,
}: ApplicationProps) => {
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
          value={60}
          colorScheme="purple"
          rounded={"full"}
          size={"sm"}
        />
      </div>

      <ResidenciesFellowships
        form={form}
        errors={errors}
        handleResidencyChange={handleResidencyChange}
      />

      {/* <HospitalAffiliations form={form} handleChange={handleChange} /> */}

      <Licensing
        form={form}
        errors={errors}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

export default Step2;
