import DateInputField from "../Inputs/dateInput";
import TextInputField from "../Inputs/TextInput";
import { ApplicationProps } from "../step1";

const boardCertificationsData = [
  {
    title: "Board Certification 1",
    fields: [
      { label: "Name of Issuing Board", name: "boardCertification1Board" },
      { label: "Specialty", name: "boardCertification1Specialty" },
      {
        label: "Date Certified/Recertified",
        name: "boardCertification1CertifiedDate",
        type: "date",
      },
      {
        label: "Expiration Date",
        name: "boardCertification1ExpirationDate",
        type: "date",
      },
    ],
  },
  {
    title: "Board Certification 2",
    fields: [
      { label: "Name of Issuing Board", name: "boardCertification2Board" },
      { label: "Specialty", name: "boardCertification2Specialty" },
      {
        label: "Date Certified/Recertified",
        name: "boardCertification2CertifiedDate",
        type: "date",
      },
      {
        label: "Expiration Date",
        name: "boardCertification2ExpirationDate",
        type: "date",
      },
    ],
  },
  {
    title: "Board Certification 3",
    fields: [
      { label: "Name of Issuing Board", name: "boardCertification3Board" },
      { label: "Specialty", name: "boardCertification3Specialty" },
      {
        label: "Date Certified/Recertified",
        name: "boardCertification3CertifiedDate",
        type: "date",
      },
      {
        label: "Expiration Date",
        name: "boardCertification3ExpirationDate",
        type: "date",
      },
    ],
  },
];

const BoardCertification = ({
  form,
  handleChange,
  handleDateChange,
}: ApplicationProps) => {
  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      .<p className="font-semibold text-base">Board Certifications</p>
      <div className="grid grid-cols-3 gap-10">
        {boardCertificationsData.map((section, index) => (
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
      <div className="flex flex-col gap-3 pt-6">
        <p className="font-semibold">Additional Board Certification</p>
        <div className="raleway text-xs flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium">
          <label className="  w-full">
            Have you applied for board certification other than those indicated
            above?
          </label>
          <input
            type="checkbox"
            checked={form.additionalBoardCertificationApplied}
            onChange={(e) =>
              handleDateChange(
                "additionalBoardCertificationApplied",
                e.target.checked
              )
            }
          />
        </div>
        <div className="raleway text-xs flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium">
          <TextInputField
            label="If no, list the board and describe your intent for certification"
            name="additionalBoardCertificationIntent"
            value={form.additionalBoardCertificationIntent || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardCertification;
