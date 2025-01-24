import { Calendar } from "lucide-react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInputField from "../Inputs/phoneInput";
import TextInputField from "../Inputs/TextInput";
import { ApplicationProps } from ".";
import { ApplicationFormInitialState } from "@/constant/data/applicationsdata";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const PersonalInformations = ({
  form = ApplicationFormInitialState,
  errors = {},
  handleChange,
  id,
}: ApplicationProps) => {
  const personalInfoFields = [
    { label: "Last Name", name: "lastName" },
    { label: "First Name", name: "firstName" },
    { label: "Middle Name", name: "middleName" },
    { label: "Other Names", name: "otherNames" },
    { label: "Home Mailing Address", name: "homeMailingAddress" },
    { label: "City", name: "city" },
    { label: "State", name: "state" },
    { label: "ZIP", name: "zip" },
    { label: "Home Telephone", name: "homeTelephone", isPhone: true },
    { label: "Email", name: "email" },
    { label: "Home Fax", name: "homeFax" },
    { label: "Cell Phone", name: "cellPhone", isPhone: true },
    { label: "Date of Birth", name: "birthdate", isDate: true },
    { label: "Birthplace", name: "birthplace" },
    { label: "SSN", name: "SSN" },
    { label: "Gender", name: "gender", isSelect: true },
    { label: "Citizenship", name: "citizenship" },
    { label: "Specialty", name: "specialty" },
    { label: "Race/Ethnicity", name: "raceEthnicity" },
    { label: "Subspecialties", name: "subspecialties" },
    { label: "National Physician Identifier (NPI I)", name: "NPI" },
    { label: "CAHQ ID", name: "cahqID" },
    { label: "CAHQ Password", name: "cahqPassword" },
  ];

  console.log(form, "formformform");

  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Personal Information</p>

      <div
        className={`  grid ${
          !id ? "xl:grid-cols-3" : "xl:grid-cols-4"
        } gap-5 md:grid-cols-2`}
      >
        {/* Personal Information Fields */}
        {personalInfoFields.map((field) => {
          if (field.isDate) {
            return (
              <div
                key={field.name}
                className="raleway text-xs flex flex-col gap-1 font-medium"
              >
                <div className="flex gap-1 items-center">
                  <label htmlFor={field.name}>{field.label}</label>
                  {errors[field.name] && (
                    <p className="text-xs text-red-500"> is required</p>
                  )}
                </div>
                <div
                  className={` ${
                    errors[field.name] ? "border-red-500 border-2" : ""
                  } border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full`}
                >
                  <div className="ml-2">
                    <Calendar size={15} />
                  </div>
                  <ReactDatePicker
                    maxDate={new Date(Date.now())}
                    selected={form.step1.personalInformation[field.name] || ""}
                    disabled={
                      user?.accountType === "organization" ? true : false
                    }
                    onChange={(date) =>
                      handleChange(
                        "step1",
                        "personalInformation",
                        field.name,
                        date
                      )
                    }
                    dateFormat={"dd/MM/yyyy"}
                    wrapperClassName="date-picker"
                  />
                </div>
              </div>
            );
          }

          if (field.isPhone) {
            return (
              <PhoneInputField
                key={field.name}
                error={!!errors[field.name]}
                label={field.label}
                readOnly={user?.accountType === "organization" ? true : false}
                value={form.step1.personalInformation[field.name] || ""}
                onChange={(phone) =>
                  handleChange(
                    "step1",
                    "personalInformation",
                    field.name,
                    phone
                  )
                }
              />
            );
          }

          if (field.isSelect) {
            return (
              <div
                key={field.name}
                className="raleway text-xs flex flex-col gap-1 font-medium"
              >
                <div className="flex gap-1 items-center">
                  <label htmlFor={field.name}>{field.label}</label>
                  {errors[field.name] && (
                    <p className="text-xs text-red-500"> is required</p>
                  )}
                </div>
                <select
                  id={field.name}
                  disabled={user?.accountType === "organization" ? true : false}
                  value={form.step1.personalInformation[field.name] || "Male"}
                  onChange={(e) =>
                    handleChange(
                      "step1",
                      "personalInformation",
                      field.name,
                      e.target.value
                    )
                  }
                  className={`${
                    errors[field.name] ? "border-red-500 border-2" : ""
                  }  border rounded-md p-2 outline-[0.5px] outline-secondary w-full`}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            );
          }

          return (
            <TextInputField
              key={field.name}
              label={field.label}
              name={field.name}
              readOnly={user?.accountType === "organization" ? true : false}
              error={!!errors[field.name]}
              type={
                field.name === "SSN" || field.name === "homeFax"
                  ? "number"
                  : "text"
              }
              value={form.step1.personalInformation[field.name] || ""}
              onChange={(e) =>
                handleChange(
                  "step1",
                  "personalInformation",
                  field.name,
                  e.target.value
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default PersonalInformations;
