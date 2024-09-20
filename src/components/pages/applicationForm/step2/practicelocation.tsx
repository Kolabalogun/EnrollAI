import { ApplicationProps } from "../step1";
import { E164Number } from "libphonenumber-js/core";
import PhoneInput from "react-phone-input-2";

const PracticeLocation = ({
  form,
  handleChange,
  handlePhoneChange,
}: ApplicationProps) => {
  const {
    primarypracticelocationName,
    primarypracticelocationOfficeAddress,
    primarypracticelocationContact,
    primarypracticelocationEmail,
    primarypracticelocationOfficeHours,
    primarypracticelocationFax,

    primarypracticelocation2Name,
    primarypracticelocation2OfficeAddress,
    primarypracticelocation2Contact,
    primarypracticelocation2Email,
    primarypracticelocation2OfficeHours,
    primarypracticelocation2Fax,
  } = form;

  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Practice Location</p>
      <div className="space-y-10 ">
        <div className="flex flex-1 gap-24">
          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">Primary Practice Location</p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-28" htmlFor="primarypracticelocationName">
                Name
              </label>
              <input
                id="primarypracticelocationName"
                name="primarypracticelocationName"
                type="text"
                placeholder="Heart Health Clinic"
                value={primarypracticelocationName}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="primarypracticelocationOfficeAddress"
              >
                Office Address
              </label>
              <input
                id="primarypracticelocationOfficeAddress"
                name="primarypracticelocationOfficeAddress"
                type="text"
                placeholder="5678 Oak Avenue, Suite 210, New York, NY 10022"
                value={primarypracticelocationOfficeAddress}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-36" htmlFor="primarypracticelocationContact">
                Contact
              </label>

              <PhoneInput
                country="ng"
                placeholder={"(000) - 123 - 4567"}
                value={primarypracticelocationContact as E164Number | undefined}
                onChange={(phone) =>
                  handlePhoneChange("primarypracticelocationContact", phone)
                }
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

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-36" htmlFor="primarypracticelocationContact">
                Fax
              </label>

              <PhoneInput
                country="ng"
                placeholder={"(000) - 123 - 4567"}
                value={primarypracticelocationFax as E164Number | undefined}
                onChange={(phone) =>
                  handlePhoneChange("primarypracticelocationFax", phone)
                }
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

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-28" htmlFor="primarypracticelocationEmail">
                Email
              </label>
              <input
                id="primarypracticelocationEmail"
                name="primarypracticelocationEmail"
                type="email"
                placeholder="info@hearthealthclinic.com"
                value={primarypracticelocationEmail}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="primarypracticelocationOfficeHours"
              >
                Office Hours
              </label>
              <input
                id="primarypracticelocationOfficeHours"
                name="primarypracticelocationOfficeHours"
                type="text"
                placeholder="Monday - Friday, 9am - 5pm"
                value={primarypracticelocationOfficeHours}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">Primary Practice Location II</p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-28" htmlFor="primarypracticelocation2Name">
                Name
              </label>
              <input
                id="primarypracticelocation2Name"
                name="primarypracticelocation2Name"
                type="text"
                placeholder="Heart Health Clinic"
                value={primarypracticelocation2Name}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="primarypracticelocation2OfficeAddress"
              >
                Office Address
              </label>
              <input
                id="primarypracticelocation2OfficeAddress"
                name="primarypracticelocation2OfficeAddress"
                type="text"
                placeholder="5678 Oak Avenue, Suite 210, New York, NY 10022"
                value={primarypracticelocation2OfficeAddress}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-36" htmlFor="primarypracticelocation2Contact">
                Contact
              </label>

              <PhoneInput
                country="ng"
                placeholder={"(000) - 123 - 4567"}
                value={
                  primarypracticelocation2Contact as E164Number | undefined
                }
                onChange={(phone) =>
                  handlePhoneChange("primarypracticelocation2Contact", phone)
                }
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

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-36" htmlFor="primarypracticelocation2Fax">
                Fax
              </label>

              <PhoneInput
                country="ng"
                placeholder={"(000) - 123 - 4567"}
                value={primarypracticelocation2Fax as E164Number | undefined}
                onChange={(phone) =>
                  handlePhoneChange("primarypracticelocation2Fax", phone)
                }
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

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-28" htmlFor="primarypracticelocation2Email">
                Email
              </label>
              <input
                id="primarypracticelocation2Email"
                name="primarypracticelocation2Email"
                type="email"
                placeholder="info@hearthealthclinic.com"
                value={primarypracticelocation2Email}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="primarypracticelocation2OfficeHours"
              >
                Office Hours
              </label>
              <input
                id="primarypracticelocation2OfficeHours"
                name="primarypracticelocation2OfficeHours"
                type="text"
                placeholder="Monday - Friday, 9am - 5pm"
                value={primarypracticelocation2OfficeHours}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeLocation;
