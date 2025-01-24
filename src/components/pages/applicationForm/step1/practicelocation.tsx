import { RootState } from "@/redux/store";
import { ApplicationProps } from ".";
import PhoneInputField from "../Inputs/phoneInput";
import TextInputField from "../Inputs/TextInput";
import { useSelector } from "react-redux";

const PracticeLocation = ({ form, errors, handleChange }: ApplicationProps) => {
  const officeSections = [
    {
      label: "Primary Office",
      fields: [
        // { label: "Practice Name", name: "primaryOfficeName" },
        // { label: "Department Name", name: "primaryDepartmentName" },
        { label: "Office Address", name: "primaryOfficeAddress" },
        { label: "City", name: "primaryCity" },
        { label: "State", name: "primaryState" },
        { label: "ZIP", name: "primaryZIP" },
        { label: "Telephone", name: "primaryTelephone", isPhone: true },
        { label: "Fax", name: "primaryFax", isPhone: true },
        {
          label: "Office Manager/Administrator Name",
          name: "primaryOfficeManager",
        },
        {
          label: "Office Manager Telephone",
          name: "primaryOfficeManagerPhone",
          isPhone: true,
        },
        {
          label: "Office Manager Fax",
          name: "primaryOfficeManagerFax",
          isPhone: true,
        },
        { label: "Name Affiliated with Tax ID", name: "primaryTaxIDName" },
        { label: "Federal Tax ID Number", name: "primaryFederalTaxID" },
      ],
    },
    {
      label: "Secondary Office",
      fields: [
        { label: "Office Address", name: "secondaryOfficeAddress" },
        { label: "City", name: "secondaryCity" },
        { label: "State", name: "secondaryState" },
        { label: "ZIP", name: "secondaryZIP" },
        {
          label: "Office Manager/Administrator",
          name: "secondaryOfficeManager",
        },
        { label: "Telephone", name: "secondaryTelephone", isPhone: true },
        { label: "Fax", name: "secondaryFax", isPhone: true },
        { label: "Name Affiliated with Tax ID", name: "secondaryTaxIDName" },
        { label: "Federal Tax ID Number", name: "secondaryFederalTaxID" },
      ],
    },
    {
      label: "Tertiary Office",
      fields: [
        { label: "Office Address", name: "tertiaryOfficeAddress" },
        { label: "City", name: "tertiaryCity" },
        { label: "State", name: "tertiaryState" },
        { label: "ZIP", name: "tertiaryZIP" },
        {
          label: "Office Manager/Administrator",
          name: "tertiaryOfficeManager",
        },
        { label: "Telephone", name: "tertiaryTelephone", isPhone: true },
        { label: "Fax", name: "tertiaryFax", isPhone: true },
        { label: "Name Affiliated with Tax ID", name: "tertiaryTaxIDName" },
        { label: "Federal Tax ID Number", name: "tertiaryFederalTaxID" },
      ],
    },
  ];

  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-9">
      <p className="font-semibold text-base">Practice Information</p>

      <div className="space-y-4">
        <div className="flex xl:flex-row flex-col justify-between gap-5">
          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="primaryOfficeName">Practice Name</label>
            <input
              id="primaryOfficeName"
              name="primaryOfficeName"
              readOnly={user?.accountType === "organization" ? true : false}
              type="text"
              placeholder="Practice Name"
              value={form.step1.practiceInformation.primaryOfficeName || ""}
              onChange={(e) =>
                handleChange(
                  "step1",
                  "practiceInformation",
                  "primaryOfficeName",
                  e.target.value
                )
              }
              className={` ${
                errors?.primaryOfficeName ? "border-red-500 border-2" : ""
              } border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full`}
            />
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="primaryDepartmentName">Department Name</label>
            <input
              id="primaryDepartmentName"
              name="primaryDepartmentName"
              type="text"
              readOnly={user?.accountType === "organization" ? true : false}
              placeholder="Department Name"
              value={form.step1.practiceInformation.primaryDepartmentName || ""}
              onChange={(e) =>
                handleChange(
                  "step1",
                  "practiceInformation",
                  "primaryDepartmentName",
                  e.target.value
                )
              }
              className={` ${
                errors?.primaryDepartmentName ? "border-red-500 border-2" : ""
              } border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full`}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        {officeSections.map((section, index) => (
          <div key={index} className="flex-1 space-y-5">
            <p className="font-semibold">{section.label}</p>
            {section.fields.map((field) =>
              field.isPhone ? (
                <PhoneInputField
                  key={field.name}
                  label={field.label}
                  readOnly={user?.accountType === "organization" ? true : false}
                  error={!!errors[field.name]}
                  value={form.step1.practiceInformation[field.name]}
                  onChange={(phone) =>
                    handleChange(
                      "step1",
                      "practiceInformation",
                      field.name,
                      phone
                    )
                  }
                />
              ) : (
                <TextInputField
                  key={field.name}
                  label={field.label}
                  readOnly={user?.accountType === "organization" ? true : false}
                  error={!!errors[field.name]}
                  name={field.name}
                  value={form.step1.practiceInformation[field.name]}
                  onChange={(e) =>
                    handleChange(
                      "step1",
                      "practiceInformation",
                      field.name,
                      e.target.value
                    )
                  }
                />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeLocation;
