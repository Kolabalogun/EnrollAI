import { Calendar } from "lucide-react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInputField from "../Inputs/phoneInput";
import TextInputField from "../Inputs/TextInput";
import { ApplicationProps } from ".";

const PersonalInformations = ({
  form,
  handleDateChange,
  handlePhoneChange,
  handleChange,
  disableForm,
}: ApplicationProps) => {
  // Define an array with personal information fields
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
    { label: "SSN", name: "ssn" },
    { label: "Gender", name: "gender" },
    { label: "Citizenship", name: "citizenship" },
    { label: "Specialty", name: "specialty" },
    { label: "Race/Ethnicity", name: "raceEthnicity" },
    { label: "Subspecialties", name: "subspecialties" },
  ];

  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Personal Information</p>

      <div className="  grid xl:grid-cols-3 gap-5 md:grid-cols-2">
        {/* Personal Information Fields */}
        {personalInfoFields.map((field) => {
          if (field.isDate) {
            return (
              <div
                key={field.name}
                className="raleway text-xs flex flex-col gap-1 font-medium"
              >
                <label htmlFor={field.name}>{field.label}</label>
                <div className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full">
                  <div className="ml-2">
                    <Calendar size={15} />
                  </div>
                  <ReactDatePicker
                    selected={form[field.name]}
                    disabled={disableForm}
                    onChange={(date) => handleDateChange(field.name, date)}
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
                label={field.label}
                value={form[field.name]}
                onChange={(phone) => handlePhoneChange(field.name, phone)}
              />
            );
          }

          return (
            <TextInputField
              key={field.name}
              label={field.label}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PersonalInformations;
