import { ApplicationProps } from "../step1";

const MalpracticeInsurance = ({ form, handleChange }: ApplicationProps) => {
  const {
    malpracticeInsuranceCurrentCarrier,
    malpracticeInsurancePolicyNumber,
    malpracticeInsuranceCoverageLimit,
    malpracticeInsuranceEffectiveDate,
    liabilityClaimsHistoryMalpracticeClaims,
    liabilityClaimsHistoryPendingLitigation,
    liabilityClaimsHistorySettlement,
    liabilityClaimsHistoryDisciplinaryAction,
  } = form;

  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <div className="space-y-10 ">
        <div className="flex flex-1 gap-24">
          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">Malpractice Insurance</p>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="malpracticeInsuranceCurrentCarrier"
              >
                Current Carrier
              </label>
              <input
                id="malpracticeInsuranceCurrentCarrier"
                name="malpracticeInsuranceCurrentCarrier"
                type="text"
                placeholder="MedPro Group"
                value={malpracticeInsuranceCurrentCarrier}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="malpracticeInsurancePolicyNumber"
              >
                Policy Number
              </label>
              <input
                id="malpracticeInsurancePolicyNumber"
                name="malpracticeInsurancePolicyNumber"
                type="text"
                placeholder="MP12345678"
                value={malpracticeInsurancePolicyNumber}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="malpracticeInsuranceCoverageLimit"
              >
                Coverage Limit
              </label>
              <input
                id="malpracticeInsuranceCoverageLimit"
                name="malpracticeInsuranceCoverageLimit"
                type="text"
                placeholder="$1,000,000 per occurence / $3,000,000 average"
                value={malpracticeInsuranceCoverageLimit}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="malpracticeInsuranceEffectiveDate"
              >
                Effective Date
              </label>
              <input
                id="malpracticeInsuranceEffectiveDate"
                name="malpracticeInsuranceEffectiveDate"
                type="text"
                placeholder="January 1, 2023 - December 31, 2023"
                value={malpracticeInsuranceEffectiveDate}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">Liability Claims History</p>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="liabilityClaimsHistoryMalpracticeClaims"
              >
                Malpractice Claims
              </label>
              <input
                id="liabilityClaimsHistoryMalpracticeClaims"
                name="liabilityClaimsHistoryMalpracticeClaims"
                type="text"
                placeholder="None"
                value={liabilityClaimsHistoryMalpracticeClaims}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="liabilityClaimsHistoryPendingLitigation"
              >
                Pending Litigation
              </label>
              <input
                id="liabilityClaimsHistoryPendingLitigation"
                name="liabilityClaimsHistoryPendingLitigation"
                type="text"
                placeholder="None"
                value={liabilityClaimsHistoryPendingLitigation}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="liabilityClaimsHistorySettlement"
              >
                Settlement
              </label>
              <input
                id="liabilityClaimsHistorySettlement"
                name="liabilityClaimsHistorySettlement"
                type="text"
                placeholder="None"
                value={liabilityClaimsHistorySettlement}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="liabilityClaimsHistoryDisciplinaryAction"
              >
                DisciplinaryAction
              </label>
              <input
                id="liabilityClaimsHistoryDisciplinaryAction"
                name="liabilityClaimsHistoryDisciplinaryAction"
                type="text"
                placeholder="None"
                value={liabilityClaimsHistoryDisciplinaryAction}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MalpracticeInsurance;
