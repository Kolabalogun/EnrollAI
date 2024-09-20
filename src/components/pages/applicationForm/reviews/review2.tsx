import { formatDateTime } from "@/utils/formatDateTime";
import { ApplicationProps } from "../step1";
import { Checkbox } from "@/components/ui/checkbox";

const Review2 = ({ form, handleCheckBoxChange }: ApplicationProps) => {
  const {
    // Hospital Affiliation
    currentHospitalAffliationHospital,
    currentHospitalAffliationPrivileges,
    previousHospitalAffliationHospital,
    previousHospitalAffliationPrivileges,

    // Licensing
    stateMedicalicense,
    stateMedicalicenseNumber,
    stateMedicalicenseExpirationDate,
    pcslicenseExpirationDate,
    pcslicense,
    pcslicenseNumber,

    // Step 3

    // Work History
    currentEmploymentPosition,
    currentEmploymentStartDate,
    currentEmploymentEndDate,
    previousEmploymentPosition,
    previousEmploymentStartDate,
    previousEmploymentEndDate,
    previousEmploymentGAP,
    previousEmploymentMilitaryService,

    // Malpractice Information
    malpracticeInsuranceCurrentCarrier,
    malpracticeInsurancePolicyNumber,
    malpracticeInsuranceCoverageLimit,
    malpracticeInsuranceEffectiveDate,
    liabilityClaimsHistoryMalpracticeClaims,
    liabilityClaimsHistoryPendingLitigation,
    liabilityClaimsHistorySettlement,
    liabilityClaimsHistoryDisciplinaryAction,

    // Terms and Conditions

    termsAndConditionsOne,
    termsAndConditionsTwo,
  } = form;

  return (
    <div className="bg-white p-5 space-y-6">
      <div className="space-y-1">
        <p className="font-semibold text-base ">Health Plan</p>
        <p className="text-[12px] font-medium text-[#667085]">
          Lorem Ipsum Organization
        </p>
      </div>

      <div className="space-y-9">
        <div className="">
          <p className="text-[#667085] text-lg underline text-center font-semibold ">
            Application Summary
          </p>
        </div>
        <div className="border-b-2 pb-10 space-y-20">
          <div className="flex justify-between gap-20 ">
            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-xl">Hospital Affiliations</p>

              <div className="space-y-3">
                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Current Hospital Affiliation
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">Hospital:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {currentHospitalAffliationHospital}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Privileges:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {currentHospitalAffliationPrivileges}
                  </p>
                </div>
              </div>
            </div>

            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-xl">Licenses</p>

              <div className="space-y-3">
                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    State Medical License
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">License:</p>
                  <p className="text-xs text-[#667085] font-medium  ">
                    {stateMedicalicense}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    License Number:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {stateMedicalicenseNumber}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Expiration Date:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(stateMedicalicenseExpirationDate)}
                  </p>
                </div>
              </div>
            </div>

            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-xl">Work History</p>

              <div className="space-y-3">
                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Current Employment:
                  </p>
                </div>
                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">Position:</p>
                  <p className="text-xs text-[#667085] font-medium   ">
                    {currentEmploymentPosition}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Start Date:
                  </p>
                  <p className="text-xs text-[#667085] font-medium  ">
                    {formatDateTime(currentEmploymentStartDate)}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">End Date:</p>
                  <p className="text-xs text-[#667085] font-medium   ">
                    {formatDateTime(currentEmploymentEndDate)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-20 ">
            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <div className="space-y-3">
                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Previous Hospital Affiliation
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">Hospital:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {previousHospitalAffliationHospital}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Privileges:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {previousHospitalAffliationPrivileges}
                  </p>
                </div>
              </div>
            </div>

            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <div className="space-y-3">
                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Professional and controlled substance License
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">License:</p>
                  <p className="text-xs text-[#667085] font-medium  ">
                    {pcslicense}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    License Number:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {pcslicenseNumber}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Expiration Date:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(pcslicenseExpirationDate)}
                  </p>
                </div>
              </div>
            </div>

            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <div className="space-y-3">
                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Previous Employment
                  </p>
                </div>
                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">Position:</p>
                  <p className="text-xs text-[#667085] font-medium   ">
                    {previousEmploymentPosition}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">Start Date</p>
                  <p className="text-xs text-[#667085] font-medium  ">
                    {formatDateTime(previousEmploymentStartDate)}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">End Date</p>
                  <p className="text-xs text-[#667085] font-medium   ">
                    {formatDateTime(previousEmploymentEndDate)}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Gaps in work
                  </p>
                  <p className="text-xs text-[#667085] font-medium   ">
                    {previousEmploymentGAP || "None"}
                  </p>
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="font-semibold text-xs text-black">
                    Military Service
                  </p>
                  <p className="text-xs text-[#667085] font-medium   ">
                    {previousEmploymentMilitaryService || "None"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex border-b-2 pb-10 justify-between gap-20 ">
          <div className="    flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Malpractice Insurance</p>

            <div className="space-y-3">
              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">
                  Current Carrier:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {malpracticeInsuranceCurrentCarrier}
                </p>
              </div>

              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">
                  Policy Number:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {malpracticeInsurancePolicyNumber}
                </p>
              </div>
              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">
                  Coverage Limit:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {malpracticeInsuranceCoverageLimit}
                </p>
              </div>
              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">
                  Effective Dates:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {malpracticeInsuranceEffectiveDate}
                </p>
              </div>
            </div>
          </div>

          <div className="    flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Liability Claims History</p>

            <div className="space-y-3">
              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">
                  Malpractice Claims:
                </p>
                <p className="text-xs text-[#667085] font-medium  ">
                  {liabilityClaimsHistoryMalpracticeClaims || "None"}
                </p>
              </div>

              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">
                  Pending Litigation:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {liabilityClaimsHistoryPendingLitigation || "None"}
                </p>
              </div>

              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">Settlement:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {liabilityClaimsHistorySettlement || "None"}
                </p>
              </div>

              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">
                  Disciplinary Action:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {liabilityClaimsHistoryDisciplinaryAction || "None"}
                </p>
              </div>
            </div>
          </div>

          <div className="    flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Additional Document</p>

            <div className="space-y-3">
              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">CV/Resume:</p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {"Alex_Johnson_CV.pdf"}
                </p>
              </div>

              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">
                  Upload Photo:
                </p>
                <p className="text-xs text-[#667085] font-medium  ">
                  {"Alex_Johnson_Photo.jpg"}
                </p>
              </div>

              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs text-black">
                  Other certification:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {"CME_Certificate.jpg"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4  py-10  ">
          <div className="">
            <p className="text-[#000] text-lg underline font-semibold ">
              Attestation
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex   gap-2">
              <Checkbox
                id={"termsAndConditionsOne"}
                checked={termsAndConditionsOne}
                onCheckedChange={() =>
                  handleCheckBoxChange(
                    "termsAndConditionsOne",
                    !termsAndConditionsOne
                  )
                }
                className="border-fade"
              />
              <label
                style={{ color: "black" }}
                htmlFor={"termsAndConditionsOne"}
                className="checkbox-label text-[#344054] font-medium plus-jakarta text-[13px]  "
              >
                I hereby attest that all information provided in this profile is
                accurate and complete to the best of my knowledge.
              </label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id={"termsAndConditionsTwo"}
                checked={termsAndConditionsTwo}
                onCheckedChange={() =>
                  handleCheckBoxChange(
                    "termsAndConditionsTwo",
                    !termsAndConditionsTwo
                  )
                }
                className="border-fade"
              />
              <label
                style={{ color: "black" }}
                htmlFor={"termsAndConditionsTwo"}
                className="checkbox-label text-[#344054] font-medium plus-jakarta text-[13px]  "
              >
                I authorize the release of this information to health plans and
                credentialing organizations for the purposes of credentialing
                and enrollment.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review2;
