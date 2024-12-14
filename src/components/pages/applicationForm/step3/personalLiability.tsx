import { ApplicationProps } from "../step1";
import TextInputField from "../Inputs/TextInput";
import DateInputField from "../Inputs/dateInput";

const professionalLiabilityData = [
  {
    title: "Current Insurance Carrier",
    fields: [
      { label: "Carrier Name", name: "currentCarrierName" },
      { label: "Policy Number", name: "currentPolicyNumber" },
      {
        label: "Original Effective Date",
        name: "currentEffectiveDate",
        type: "date",
      },
      { label: "Expiration Date", name: "currentExpirationDate", type: "date" },
      { label: "Mailing Address", name: "currentMailingAddress" },
      { label: "City", name: "currentCity" },
      { label: "State", name: "currentState" },
      { label: "ZIP", name: "currentZIP" },
      { label: "Per Claim Amount", name: "currentPerClaimAmount" },
      { label: "Aggregate Amount", name: "currentAggregateAmount" },
    ],
  },
  {
    title: "Previous Insurance Carrier 1",
    fields: [
      { label: "Name of Carrier", name: "previousCarrier1Name" },
      { label: "Policy Number", name: "previousCarrier1PolicyNumber" },
      { label: "From Date", name: "previousCarrier1FromDate", type: "date" },
      { label: "To Date", name: "previousCarrier1ToDate", type: "date" },
      { label: "Mailing Address", name: "previousCarrier1MailingAddress" },
      { label: "City", name: "previousCarrier1City" },
      { label: "State", name: "previousCarrier1State" },
      { label: "ZIP", name: "previousCarrier1ZIP" },
      { label: "Per Claim Amount", name: "currentPerClaimAmount" },
      { label: "Aggregate Amount", name: "currentAggregateAmount" },
    ],
  },
  {
    title: "Previous Insurance Carrier 2",
    fields: [
      { label: "Name of Carrier", name: "previousCarrier2Name" },
      { label: "Policy Number", name: "previousCarrier2PolicyNumber" },
      { label: "From Date", name: "previousCarrier2FromDate", type: "date" },
      { label: "To Date", name: "previousCarrier2ToDate", type: "date" },
      { label: "Mailing Address", name: "previousCarrier2MailingAddress" },
      { label: "City", name: "previousCarrier2City" },
      { label: "State", name: "previousCarrier2State" },
      { label: "ZIP", name: "previousCarrier2ZIP" },
      { label: "Per Claim Amount", name: "currentPerClaimAmount" },
      { label: "Aggregate Amount", name: "currentAggregateAmount" },
    ],
  },
];

const ProfessionalLiability = ({
  form,
  handleChange,
  handleDateChange,
}: ApplicationProps) => {
  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Professional Liability</p>
      <div className="grid grid-cols-3 gap-10">
        {professionalLiabilityData.map((section, index) => (
          <div key={index} className="flex flex-col gap-3">
            <p className="font-semibold">{section.title}</p>
            {section.fields.map((field, fieldIndex) => (
              <div
                key={fieldIndex}
                className="raleway text-xs flex xl:flex-row flex-col w-full   gap-2 xl:items-center font-medium"
              >
                {field.type === "date" ? (
                  <DateInputField
                    label={field.label}
                    selected={form[field.name]}
                    onChange={(date) => handleDateChange(field.name, date)}
                  />
                ) : (
                  <TextInputField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalLiability;
