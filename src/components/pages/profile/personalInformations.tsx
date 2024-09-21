/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar } from "lucide-react";
import { E164Number } from "libphonenumber-js/core";
import PhoneInput from "react-phone-input-2";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ApplicationProps } from "../applicationForm/step1";
import { Country, State } from "country-state-city";
import { useState } from "react";

const PersonalInformations = ({
  form,
  handleDateChange,
  handlePhoneChange,
  handleChange,
  disableForm,
}: ApplicationProps) => {
  const {
    fullName,
    gender,
    dob,
    ssn,
    npi,
    phoneNumber,
    email,
    presentPosition,
    upin,
    medicare,
    citizenship,
    bop,
    taxID,
    medicaid,
  } = form;

  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
  }));

  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry).map((state) => ({
        label: state.name,
        value: state.isoCode,
      }))
    : [];
  // console.log(states);

  const handleCountryChange = (option: any) => {
    setSelectedCountry(option);

    console.log(option);

    handlePhoneChange("citizenship", option);
  };

  const handleStateChange = (option: any) => {
    handlePhoneChange("bop", option);
  };

  return (
    <div className="       pb-10 space-y-5">
      <div className="space-y-2">
        <div className="flex flex-row justify-between gap-8">
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
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex flex-row justify-between gap-8">
          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="gender">Gender</label>
            <select
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
              name="gender"
              id="gender"
              value={gender}
              disabled={disableForm}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

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
                width: "100%",
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
        </div>
      </div>

      {/* Citizenship and Place of Birth (Country, State) */}
      <div className="space-y-2">
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="citizenship">Citizenship</label>
            <select
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
              name="citizenship"
              id="citizenship"
              value={citizenship}
              onChange={(e) => handleCountryChange(e.target.value)}
              disabled={disableForm}
              // onChange={handleChange}
            >
              {countries?.map((country) => (
                <option className="font-medium" value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="bop">Place of Birth (State)</label>
            <select
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
              name="bop"
              id="bop"
              value={bop}
              onChange={handleStateChange}
              disabled={disableForm || !selectedCountry}
            >
              {states?.map((country) => (
                <option className="font-medium" value={country.value}>
                  {country.label}
                </option>
              ))}
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
        </div>{" "}
      </div>

      <div className="space-y-2">
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="address">Present Position</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="American"
              value={presentPosition}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="npi">National Provider Identifier (NPI)</label>
            <input
              id="npi"
              name="npi"
              type="number"
              placeholder="National Provider Identifier (NPI)"
              value={npi}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>
          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="medicare">Medicare</label>
            <input
              id="medicare"
              name="medicare"
              type="text"
              placeholder="Medicare"
              value={medicare}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="upin">UPIN</label>
            <input
              id="upin"
              name="upin"
              type="number"
              placeholder="UPIN"
              value={upin}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="taxID">Fee tax ID</label>
            <input
              id="taxID"
              name="taxID"
              type="text"
              placeholder="American"
              value={taxID}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="medicaid">Medicaid</label>
            <input
              id="medicaid"
              name="medicaid"
              type="number"
              placeholder="medicaid"
              value={medicaid}
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
