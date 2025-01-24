import { RootState } from "@/redux/store";
import { ApplicationProps } from ".";
import DateInputField from "../Inputs/dateInput";
import TextInputField from "../Inputs/TextInput";
import { useSelector } from "react-redux";

const Education = ({ form, errors, handleChange }: ApplicationProps) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const educationData = [
    {
      title: "Premedical",
      fields: [
        { label: "College or University Name", name: "premedicalInstitution" },
        { label: "Degree Received", name: "premedicalDegree" },
        {
          label: "Date of Graduation",
          name: "premedicalGraduationDate",
          type: "date",
        },
        { label: "Mailing Address", name: "premedicalMailingAddress" },
        { label: "City", name: "premedicalCity" },
        { label: "State", name: "premedicalState" },
        { label: "ZIP", name: "premedicalZIP" },
      ],
    },

    {
      title: "Medical School",
      fields: [
        { label: "Medical School Name", name: "medicalSchoolInstitution" },
        { label: "Degree Received", name: "medicalSchoolDegree" },
        {
          label: "Date of Graduation",
          name: "medicalSchoolGraduationDate",
          type: "date",
        },
        { label: "Mailing Address", name: "medicalSchoolMailingAddress" },
        { label: "City", name: "medicalSchoolCity" },
        { label: "State", name: "medicalSchoolState" },
        { label: "ZIP", name: "medicalSchoolZIP" },
      ],
    },
    {
      title: "Medical Professional School",
      fields: [
        {
          label: "Professional School Name",
          name: "professionalSchoolInstitution",
        },
        { label: "Degree Received", name: "professionalSchoolDegree" },
        {
          label: "Date of Graduation",
          name: "professionalSchoolGraduationDate",
          type: "date",
        },
        { label: "Mailing Address", name: "professionalSchoolMailingAddress" },
        { label: "City", name: "professionalSchoolCity" },
        { label: "State", name: "professionalSchoolState" },
        { label: "ZIP", name: "professionalSchoolZIP" },
      ],
    },
    {
      title: "Internship/PG",
      fields: [
        { label: "Institution", name: "internshipInstitution" },
        { label: "Program Director", name: "internshipProgramDirector" },
        { label: "Mailing Address", name: "internshipMailingAddress" },
        { label: "City", name: "internshipCity" },
        { label: "State", name: "internshipState" },
        { label: "ZIP", name: "internshipZIP" },
        { label: "Type of Internship", name: "internshipType" },
        { label: "Specialty", name: "internshipSpecialty" },
        { label: "From Date", name: "internshipFromDate", type: "date" },
        { label: "To Date", name: "internshipToDate", type: "date" },
        { label: "Physician Name", name: "internshipPhysicianName" },
      ],
    },
  ];
  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Education</p>
      <div className="grid grid-cols-2 gap-10">
        {educationData.map((section, index) => (
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
                    max
                    disabled={
                      user?.accountType === "organization" ? true : false
                    }
                    error={!!errors[field.name]}
                    selected={form.step1.education[field.name] || null}
                    onChange={(date) =>
                      handleChange("step1", "education", field.name, date)
                    }
                  />
                ) : (
                  <TextInputField
                    key={field.name}
                    label={field.label}
                    error={errors[field.name]}
                    readOnly={
                      user?.accountType === "organization" ? true : false
                    }
                    name={field.name}
                    value={form?.step1?.education[field.name] || ""}
                    onChange={(e) =>
                      handleChange(
                        "step1",
                        "education",
                        field.name,
                        e.target.value
                      )
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

export default Education;
