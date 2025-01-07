import { formatDateTime } from "@/utils/formatDateTime";
import { ApplicationProps } from "../step1";
import { Checkbox } from "@/components/ui/checkbox";

const Review2 = ({ form, handleCheckBoxChange }: ApplicationProps) => {
  const {
    step2: {
      residencies: [
        {
          residency1Institution,
          residency1ProgramDirector,
          residency1MailingAddress,
          residency1City,
          residency1State,
          residency1ZIP,
          residency1Type,
          residency1Specialty,
          residency1FromDate,
          residency1ToDate,
          residency1Completed,
        },
        {
          residency2Institution,
          residency2ProgramDirector,
          residency2MailingAddress,
          residency2City,
          residency2State,
          residency2ZIP,
          residency2Type,
          residency2Specialty,
          residency2FromDate,
          residency2ToDate,
          residency2Completed,
        },
        {
          residency3Institution,
          residency3ProgramDirector,
          residency3MailingAddress,
          residency3City,
          residency3State,
          residency3ZIP,
          residency3Type,
          residency3Specialty,
          residency3FromDate,
          residency3ToDate,
          residency3Completed,
        },
      ],

      medicalLicenses: {
        deaRegistrationNumber,
        deaExpirationDate,
        deaExpirationFile,

        controlledSubstanceCertificate,
        controlledSubstanceExpirationDate,
        controlledSubstanceExpirationFile,

        ECFMGNumber,
        ecfmIssueDate,
        ecfmValidThrough,
        ECFMGFile,

        medicaidIDNumber,
        medicaidCertificate,
      },

      otherMedLicenses: {
        stateMedicalLicense1,
        stateMedicalLicenseNumber1,
        stateMedicalLicenseExpirationDate1,
        stateMedicalLicensefile1,

        stateMedicalLicense2,
        stateMedicalLicenseNumber2,
        stateMedicalLicenseExpirationDate2,
        stateMedicalLicensefile2,

        stateMedicalLicense3,
        stateMedicalLicenseNumber3,
        stateMedicalLicenseExpirationDate3,
        stateMedicalLicensefile3,
      },
    },
    step3: {
      carriers: {
        currentCarrierName,
        currentPolicyNumber,
        currentEffectiveDate,
        currentExpirationDate,
        currentMailingAddress,
        currentCity,
        currentState,
        currentZIP,
        currentPerClaimAmount,
        currentAggregateAmount,

        previousCarrier1Name,
        previousCarrier1PolicyNumber,
        previousCarrier1FromDate,
        previousCarrier1ToDate,
        previousCarrier1MailingAddress,
        previousCarrier1City,
        previousCarrier1State,
        previousCarrier1ZIP,
        currentPerClaim1Amount,
        currentAggregate1Amount,

        previousCarrier2Name,
        previousCarrier2PolicyNumber,
        previousCarrier2FromDate,
        previousCarrier2ToDate,
        previousCarrier2MailingAddress,
        previousCarrier2City,
        previousCarrier2State,
        previousCarrier2ZIP,
        currentPerClaim2Amount,
        currentAggregate2Amount,
      },

      boards: {
        boardCertification1Board,
        boardCertification1Specialty,
        boardCertification1CertifiedDate,
        boardCertification1ExpirationDate,
        certificationfile1,

        boardCertification2Board,
        boardCertification2Specialty,
        boardCertification2CertifiedDate,
        boardCertification2ExpirationDate,
        certificationfile2,

        boardCertification3Board,
        boardCertification3Specialty,
        boardCertification3CertifiedDate,
        boardCertification3ExpirationDate,
        certificationfile3,

        additionalBoardCertificationApplied,

        additionalBoardCertificationIntent,
      },
    },

    // Terms and Conditions

    termsAndConditionsOne,
    termsAndConditionsTwo,
  } = form;

  return (
    <div className="bg-white p-5 space-y-6">
      <div className="space-y-1">
        <p className="font-semibold text-base ">{form?.applicationType}</p>
        <p className="text-[12px] font-medium text-[#667085]">
          {form?.organizationName} - {form?.applicationTitle}
        </p>
      </div>

      <div className="space-y-9">
        <div className="">
          <p className="text-[#667085] text-lg underline text-center font-semibold ">
            Application Summary
          </p>
        </div>
        <div className="border-b-2 pb-10 space-y-20">
          <div className="flex xl:flex-row flex-col  justify-between xl:gap-20 gap-8   ">
            <div className="flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-xl">Residencies</p>

              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-black text-xl">
                    Residency 1
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency1Institution || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Program Director:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency1ProgramDirector || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Mailing Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency1MailingAddress || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">ZIP:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency1ZIP || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">City:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency1City || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">State:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency1State || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Type:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency1Type || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Specialty:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency1Specialty || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Residency From Date:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(residency1FromDate, true) ?? "N/A"}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Residency To Date:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(residency1ToDate, true) ?? "N/A"}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Are you done with this Residency?:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency1Completed ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-white">Residencies</p>

              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-black text-xl">
                    Residency 2
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency2Institution || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Program Director:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency2ProgramDirector || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Mailing Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency2MailingAddress || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">ZIP:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency2ZIP || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">City:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency2City || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">State:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency2State || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Type:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency2Type || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Specialty:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency2Specialty || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Residency From Date:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(residency2FromDate, true) ?? "N/A"}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Residency To Date:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(residency2ToDate, true) ?? "N/A"}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Are you done with this Residency?:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency2Completed ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-white">Residencies</p>

              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-black text-xl">
                    Residency 3
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency3Institution || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Program Director:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency3ProgramDirector || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Mailing Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency3MailingAddress || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">ZIP:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency3ZIP || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">City:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency3City || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">State:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency3State || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Type:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency3Type || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Specialty:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency3Specialty || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Residency From Date:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(residency3FromDate, true) ?? "N/A"}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Residency To Date:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(residency3ToDate, true) ?? "N/A"}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Are you done with this Residency?:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residency3Completed ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-b-2 pb-10 xl:grid-cols-3         ">
          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Licenses</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">DEA</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  DEA Registration Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {deaRegistrationNumber}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(deaExpirationDate, true) ?? "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">DEA File:</p>
                <p
                  onClick={() => window.open(deaExpirationFile, "_blank")}
                  className="text-xs underline text-secondary cursor-pointer  font-medium   "
                >
                  Preview
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white">Licenses</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">Controlled Substance</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Certificate Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {controlledSubstanceCertificate}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(controlledSubstanceExpirationDate, true) ??
                    "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p
                  onClick={() =>
                    window.open(controlledSubstanceExpirationFile, "_blank")
                  }
                  className="font-semibold text-xs text-black"
                >
                  DEA File:
                </p>
                <p className="text-xs underline text-secondary cursor-pointer  font-medium   ">
                  Preview
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white">Licenses</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">ECFMG</p>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  ECFMG Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {ECFMGNumber}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Issue Date:</p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(ecfmIssueDate, true) ?? "N/A"}
                </p>
              </div>{" "}
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Valid Through:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(ecfmValidThrough, true) ?? "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">ECFMG File:</p>
                <p
                  onClick={() => window.open(ECFMGFile, "_blank")}
                  className="text-xs underline text-secondary cursor-pointer  font-medium   "
                >
                  Preview
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white">Licenses</p>

            <div className="space-y-3">
              <p className="font-semibold    text-xl">Medicaid</p>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Medicaid ID Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {medicaidIDNumber}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Medicaid Certificate:
                </p>
                <p
                  onClick={() => window.open(medicaidCertificate, "_blank")}
                  className="text-xs underline text-secondary cursor-pointer  font-medium   "
                >
                  Preview
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-b-2 pb-10 xl:grid-cols-3   xl:gap-20 gap-8   ">
          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Other Licenses</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">State Medical License 1</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  State Medical License:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {stateMedicalLicense1}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  License Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {stateMedicalLicenseNumber1}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(stateMedicalLicenseExpirationDate1, true) ??
                    "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Certificate File:
                </p>
                <p
                  onClick={() =>
                    window.open(stateMedicalLicensefile1, "_blank")
                  }
                  className="text-xs underline text-secondary cursor-pointer  font-medium   "
                >
                  Preview
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white">Other Licenses</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">State Medical License 2</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  State Medical License:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {stateMedicalLicense2}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  License Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {stateMedicalLicenseNumber2}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(stateMedicalLicenseExpirationDate2, true) ??
                    "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Certificate File:
                </p>
                <p
                  onClick={() =>
                    window.open(stateMedicalLicensefile2, "_blank")
                  }
                  className="text-xs underline text-secondary cursor-pointer  font-medium   "
                >
                  Preview
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white">Other Licenses</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">State Medical License 3</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  State Medical License:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {stateMedicalLicense3}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  License Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {stateMedicalLicenseNumber3}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(stateMedicalLicenseExpirationDate3, true) ??
                    "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Certificate File:
                </p>
                <p
                  onClick={() =>
                    window.open(stateMedicalLicensefile3, "_blank")
                  }
                  className="text-xs underline text-secondary cursor-pointer  font-medium   "
                >
                  Preview
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-b-2 pb-10 xl:grid-cols-3   xl:gap-20 gap-8   ">
          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Carriers</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">Current Carrier</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Current Carrier Name:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentCarrierName}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Policy Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentPolicyNumber}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Effective Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(currentEffectiveDate, true) ?? "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(currentExpirationDate, true) ?? "N/A"}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Mailing Address:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentMailingAddress}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">City:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentCity}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">State:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentState}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">ZIP:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentZIP}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Per Claim Amount:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentPerClaimAmount}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Aggregate Amount:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentAggregateAmount}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white">Carriers</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">Previous Carrier 1</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Current Carrier Name:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier1Name}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Policy Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier1PolicyNumber}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Effective Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(previousCarrier1FromDate, true) ?? "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(previousCarrier1ToDate, true) ?? "N/A"}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Mailing Address:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier1MailingAddress}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">City:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier1City}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">State:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier1State}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">ZIP:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier1ZIP}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Per Claim Amount:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentPerClaim1Amount}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Aggregate Amount:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentAggregate1Amount}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white">Carriers</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">Previous Carrier 2</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Current Carrier Name:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier2Name}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Policy Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier2PolicyNumber}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Effective Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(previousCarrier2FromDate, true) ?? "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(previousCarrier2ToDate, true) ?? "N/A"}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Mailing Address:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier2MailingAddress}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">City:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier2City}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">State:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier2State}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">ZIP:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {previousCarrier2ZIP}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Per Claim Amount:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentPerClaim2Amount}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Aggregate Amount:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {currentAggregate2Amount}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-b-2 pb-10 xl:grid-cols-3   xl:gap-20 gap-8   ">
          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Boards</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">Board Certification 1</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Certification Name:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {boardCertification1Board}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Specialty:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {boardCertification1Specialty}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Date Certified:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(boardCertification1CertifiedDate, true) ??
                    "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(boardCertification1ExpirationDate, true) ??
                    "N/A"}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Certification File:
                </p>
                <p
                  onClick={() => window.open(certificationfile1, "_blank")}
                  className="text-xs underline text-secondary cursor-pointer  font-medium   "
                >
                  Preview
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white">Boards</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">Board Certification 2</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Certification Name:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {boardCertification2Board}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Specialty:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {boardCertification2Specialty}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Date Certified:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(boardCertification2CertifiedDate, true) ??
                    "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(boardCertification2ExpirationDate, true) ??
                    "N/A"}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Certification File:
                </p>
                <p
                  onClick={() => window.open(certificationfile2, "_blank")}
                  className="text-xs underline text-secondary cursor-pointer  font-medium   "
                >
                  Preview
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white">Boards</p>

            <div className="space-y-3">
              <p className="font-semibold text-xl">Board Certification 3</p>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Certification Name:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {boardCertification3Board}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Specialty:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {boardCertification3Specialty}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Date Certified:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(boardCertification3CertifiedDate, true) ??
                    "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Expiration Date:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {formatDateTime(boardCertification3ExpirationDate, true) ??
                    "N/A"}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Certification File:
                </p>
                <p
                  onClick={() => window.open(certificationfile3, "_blank")}
                  className="text-xs underline text-secondary cursor-pointer  font-medium   "
                >
                  Preview
                </p>
              </div>
            </div>
          </div>

          {additionalBoardCertificationApplied && (
            <div className="flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-white">Boards</p>

              <div className="space-y-3">
                <p className="font-semibold text-xl">Additional Board Intent</p>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Intent:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {additionalBoardCertificationIntent}
                  </p>
                </div>
              </div>
            </div>
          )}
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
