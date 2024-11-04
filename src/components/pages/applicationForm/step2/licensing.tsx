import DateInputField from "../Inputs/dateInput";
import TextInputField from "../Inputs/TextInput";
import { ApplicationProps } from "../step1";

const mainLicenseRegistration = [
  {
    title: "Medical License/Registration",
    fields: [
      { label: "DEA Registration Number", name: "deaRegistrationNumber" },
      { label: "DEA Expiration Date", name: "deaExpirationDate", type: "date" },
      {
        label: "Controlled Dangerous Substance Certificate",
        name: "controlledSubstanceCertificate",
      },
      {
        label: "Controlled Substance Expiration Date",
        name: "controlledSubstanceExpirationDate",
        type: "date",
      },
      { label: "ECFMG Number", name: "ecfmNumber" },
      { label: "Date Issued", name: "ecfmIssueDate", type: "date" },
      { label: "Valid Through", name: "ecfmValidThrough", type: "date" },
      {
        label: "Medicare UPIN/National Physician Identifier",
        name: "medicareUpin",
      },
      { label: "Medicaid/Medicare Number", name: "medicaidMedicareNumber" },
    ],
  },
];

const medicalLicensesData = [
  {
    title: "State Medical License 1",
    fields: [
      { label: "License", name: "stateMedicalLicense1" },
      { label: "License Number", name: "stateMedicalLicenseNumber1" },
      {
        label: "Expiration Date",
        name: "stateMedicalLicenseExpirationDate1",
        type: "date",
      },
    ],
  },
  {
    title: "State Medical License 2",
    fields: [
      { label: "License", name: "stateMedicalLicense2" },
      { label: "License Number", name: "stateMedicalLicenseNumber2" },
      {
        label: "Expiration Date",
        name: "stateMedicalLicenseExpirationDate2",
        type: "date",
      },
    ],
  },
  {
    title: "State Medical License 3",
    fields: [
      { label: "License", name: "stateMedicalLicense3" },
      { label: "License Number", name: "stateMedicalLicenseNumber3" },
      {
        label: "Expiration Date",
        name: "stateMedicalLicenseExpirationDate3",
        type: "date",
      },
    ],
  },
  // ... other license sections (DEA, CDS, ECFMG, Medicare)
];

const Licensing = ({
  form,
  handleChange,
  handleDateChange,
}: ApplicationProps) => {
  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      <div className="space-y-5">
        <p className="font-semibold text-base">Licenses</p>
        <div className=" ">
          {mainLicenseRegistration.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <p className="font-semibold">{section.title}</p>
              <div className="grid grid-cols-3 w-full gap-5">
                {section.fields.map((field, fieldIndex) => (
                  <div
                    key={fieldIndex}
                    className="raleway text-xs flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium"
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
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <p className="font-semibold text-base">Other Licenses</p>
        <div className="grid grid-cols-3 gap-10">
          {medicalLicensesData.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <p className="font-semibold">{section.title}</p>
              {section.fields.map((field, fieldIndex) => (
                <div
                  key={fieldIndex}
                  className="raleway text-xs flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium"
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
    </div>
  );
};

export default Licensing;
