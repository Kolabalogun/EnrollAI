import { RootState } from "@/redux/store";
import DateInputField from "../Inputs/dateInput";
import TextInputField from "../Inputs/TextInput";
import { ApplicationProps } from "../step1";
import { useSelector } from "react-redux";

const residenciesFellowshipsData = [
  {
    title: "Residency/Fellowship 1",
    fields: [
      { label: "Institution", name: "residency1Institution" },
      { label: "Program Director", name: "residency1ProgramDirector" },
      { label: "Mailing Address", name: "residency1MailingAddress" },
      { label: "City", name: "residency1City" },
      { label: "State", name: "residency1State" },
      { label: "ZIP", name: "residency1ZIP" },
      { label: "Type of Training", name: "residency1Type" },
      { label: "Specialty", name: "residency1Specialty" },
      { label: "From Date", name: "residency1FromDate", type: "date" },
      { label: "To Date", name: "residency1ToDate", type: "date" },
      {
        label: "Did You Successfully Complete the Program?",
        name: "residency1Completed",
        type: "checkbox",
      },
    ],
  },
  {
    title: "Residency/Fellowship 2",
    fields: [
      { label: "Institution", name: "residency2Institution" },
      { label: "Program Director", name: "residency2ProgramDirector" },
      { label: "Mailing Address", name: "residency2MailingAddress" },
      { label: "City", name: "residency2City" },
      { label: "State", name: "residency2State" },
      { label: "ZIP", name: "residency2ZIP" },
      { label: "Type of Training", name: "residency2Type" },
      { label: "Specialty", name: "residency2Specialty" },
      { label: "From Date", name: "residency2FromDate", type: "date" },
      { label: "To Date", name: "residency2ToDate", type: "date" },
      {
        label: "Did You Successfully Complete the Program?",
        name: "residency2Completed",
        type: "checkbox",
      },
    ],
  },
  {
    title: "Residency/Fellowship 3",
    fields: [
      { label: "Institution", name: "residency3Institution" },
      { label: "Program Director", name: "residency3ProgramDirector" },
      { label: "Mailing Address", name: "residency3MailingAddress" },
      { label: "City", name: "residency3City" },
      { label: "State", name: "residency3State" },
      { label: "ZIP", name: "residency3ZIP" },
      { label: "Type of Training", name: "residency3Type" },
      { label: "Specialty", name: "residency3Specialty" },
      { label: "From Date", name: "residency3FromDate", type: "date" },
      { label: "To Date", name: "residency3ToDate", type: "date" },
      {
        label: "Did You Successfully Complete the Program?",
        name: "residency3Completed",
        type: "checkbox",
      },
    ],
  },
];

const ResidenciesFellowships = ({
  form,
  errors,
  handleResidencyChange,
}: ApplicationProps) => {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Residency / Fellowship</p>
      <div className="grid grid-cols-3 gap-10">
        {residenciesFellowshipsData.map((section, index) => (
          <div key={index} className="flex flex-col gap-3">
            <p className="font-semibold">{section.title}</p>
            {section.fields.map((field, fieldIndex) => (
              <div
                key={fieldIndex}
                className="raleway text-xs flex xl:flex-row flex-col w-full   gap-2 xl:items-center font-medium"
              >
                {field.type === "checkbox" && (
                  <label
                    className=" raleway font-medium  w-full"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                )}
                {field.type === "date" ? (
                  <DateInputField
                    label={field.label}
                    max
                    disabled={user?.accountType !== "provider" ? true : false}
                    error={!!errors[field.name]}
                    selected={form.step2.residencies[index][field.name]}
                    onChange={(date) =>
                      handleResidencyChange(index, field.name, date)
                    }
                  />
                ) : field.type === "checkbox" ? (
                  <input
                    type="checkbox"
                    id={field.name}
                    name={field.name}
                    readOnly={user?.accountType !== "provider" ? true : false}
                    checked={form.step2.residencies[index][field.name]}
                    value={form.step2.residencies[index][field.name]}
                    onChange={(e) =>
                      handleResidencyChange(index, field.name, e.target.checked)
                    }
                  />
                ) : (
                  <TextInputField
                    key={field.name}
                    label={field.label}
                    readOnly={user?.accountType !== "provider" ? true : false}
                    name={field.name}
                    value={form.step2.residencies[index][field.name]}
                    onChange={(e) =>
                      handleResidencyChange(index, field.name, e.target.value)
                    }
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

export default ResidenciesFellowships;
