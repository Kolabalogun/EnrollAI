import { ApplicationProps } from "../applicationForm/step1";
import { E164Number } from "libphonenumber-js/core";
import PhoneInput from "react-phone-input-2";

const Reference = ({
  form,
  handleChange,
  handlePhoneChange,
}: ApplicationProps) => {
  const {
    reference1FullName,
    reference1Email,
    reference1PhoneNumber,

    reference2Institution,
    reference2Email,
    reference2PhoneNumber,

    reference3Institution,
    reference3Email,
    reference3PhoneNumber,
  } = form;

  return (
    <div className="  pb-10 space-y-5">
      <p className="font-semibold ">References</p>
      <div className="space-y-10 ">
        <div className="flex flex-1 gap-10 xl:flex-row flex-col">
          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">Reference 1</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="reference1FullName">
                Full Name
              </label>
              <input
                id="reference1FullName"
                name="reference1FullName"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={reference1FullName}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="reference1Email">
                Email
              </label>
              <input
                id="reference1Email"
                name="reference1Email"
                type="text"
                placeholder="Interventional Cardiology"
                value={reference1Email}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="reference1PhoneNumber"
              >
                Phone Number
              </label>
              <PhoneInput
                country="ng"
                placeholder={"(000) - 123 - 4567"}
                value={reference1PhoneNumber as E164Number | undefined}
                onChange={(phone) =>
                  handlePhoneChange("reference1PhoneNumber", phone)
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
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">Reference 2</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="reference2Institution"
              >
                Institution
              </label>
              <input
                id="reference2Institution"
                name="reference2Institution"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={reference2Institution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="reference2Email">
                Email
              </label>
              <input
                id="reference2Email"
                name="reference2Email"
                type="text"
                placeholder="Interventional Cardiology"
                value={reference2Email}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="reference2PhoneNumber"
              >
                Phone Number
              </label>
              <PhoneInput
                country="ng"
                placeholder={"(000) - 123 - 4567"}
                value={reference2PhoneNumber as E164Number | undefined}
                onChange={(phone) =>
                  handlePhoneChange("reference2PhoneNumber", phone)
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
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">Reference 3</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="reference3Institution"
              >
                Institution
              </label>
              <input
                id="reference3Institution"
                name="reference3Institution"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={reference3Institution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="reference3Email">
                Email
              </label>
              <input
                id="reference3Email"
                name="reference3Email"
                type="text"
                placeholder="Interventional Cardiology"
                value={reference3Email}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="reference3PhoneNumber"
              >
                Phone Number
              </label>
              <PhoneInput
                country="ng"
                placeholder={"(000) - 123 - 4567"}
                value={reference3PhoneNumber as E164Number | undefined}
                onChange={(phone) =>
                  handlePhoneChange("reference3PhoneNumber", phone)
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;
