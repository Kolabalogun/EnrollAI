import { Progress } from "@chakra-ui/react";
import { ApplicationProps } from "../step1";
// import WorkHistory from "./workhistory";
// import MalpracticeInsurance from "./malpracticeInsurance";
// import AdditionalDocument from "./additionalDocument";
import ProfessionalLiability from "./personalLiability";
import BoardCertification from "./boardCertification";

const Step3 = ({
  form,
  errors,
  handleChange,
  handleFileChange,
  id,
}: ApplicationProps) => {
  return (
    <div
      className={`bg-white rounded-lg   ${!id && "xl:p-5 px-3 py-5"} space-y-4`}
    >
      {!id && (
        <div className="space-y-1">
          <p className="font-semibold text-base ">{form?.applicationType}</p>
          <p className="text-[12px] font-medium text-[#667085]">
            {form?.organizationName} - {form?.applicationTitle}
          </p>
        </div>
      )}

      <div className="">
        <Progress
          value={99}
          colorScheme="purple"
          rounded={"full"}
          size={"sm"}
        />
      </div>

      <ProfessionalLiability
        form={form}
        errors={errors}
        handleChange={handleChange}
      />

      <BoardCertification
        form={form}
        errors={errors}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
      />

      {/* <WorkHistory
        form={form}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />

      <MalpracticeInsurance form={form} handleChange={handleChange} />

      <AdditionalDocument form={form} handleChange={handleChange} /> */}
    </div>
  );
};

export default Step3;
