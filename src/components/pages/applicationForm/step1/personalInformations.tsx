import { Calendar } from "lucide-react";
import { E164Number } from "libphonenumber-js/core";
import PhoneInput from "react-phone-input-2";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ApplicationProps } from ".";

const PersonalInformations = ({
  form,
  handleDateChange,
  handlePhoneChange,
  handleChange,
  disableForm,
}: ApplicationProps) => {
  const { fullName, sex, dob, ssn, language, phoneNumber, email, address } =
    form;

  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Personal Information</p>
      <div className="space-y-2">
        <div className="flex flex-row justify-between gap-3">
          <div
            style={{ flex: 2 }}
            className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium"
          >
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="sex">Sex</label>
            <select
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
              name="sex"
              id="sex"
              value={sex}
              disabled={disableForm}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="dob">Date of Birth</label>
            <div
              id="dob"
              className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
            >
              <div className="ml-2">
                <Calendar size={15} />
              </div>

              <ReactDatePicker
                selected={dob}
                disabled={disableForm}
                onChange={(date) => handleDateChange("dob", date)}
                dateFormat={"dd/MM/yyyy"}
                wrapperClassName="date-picker"
              />
            </div>
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="ssn">Social Security Number</label>
            <input
              id="ssn"
              name="ssn"
              type="text"
              placeholder="xxx-xxx-876"
              value={ssn}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="language">Language Spoken</label>
            <input
              id="language"
              name="language"
              type="text"
              placeholder="English, Spanish..."
              value={language}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex flex-row items-center justify-between gap-3">
          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="phoneNumber">Phone Number</label>
            <PhoneInput
              country="ng"
              placeholder={"(000) - 123 - 4567"}
              value={phoneNumber as E164Number | undefined}
              disabled={disableForm}
              onChange={(phone) => handlePhoneChange("phoneNumber", phone)}
              buttonStyle={{
                borderColor: "#e2e8f0",
              }}
              dropdownStyle={{
                fontSize: 13,
              }}
              inputStyle={{
                height: "2.2rem",
                fontFamily: "raleway",
                borderColor: "#e2e8f0",
                borderRadius: "6px",
              }}
            />
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={email}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>

          <div
            style={{ flex: 2 }}
            className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium"
          >
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              value={address}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformations;
