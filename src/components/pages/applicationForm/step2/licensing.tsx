import { Calendar } from "lucide-react";
import { ApplicationProps } from "../step1";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Licensing = ({
  form,
  handleChange,
  handleDateChange,
}: ApplicationProps) => {
  const {
    stateMedicalicense,
    stateMedicalicenseNumber,
    stateMedicalicenseExpirationDate,
    pcslicenseExpirationDate,
    pcslicense,
    pcslicenseNumber,
  } = form;

  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Licenses</p>
      <div className="space-y-10 ">
        <div className="flex flex-1 gap-24">
          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">State Medical License</p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-28" htmlFor="stateMedicalicense">
                License
              </label>
              <input
                id="stateMedicalicense"
                name="stateMedicalicense"
                type="text"
                placeholder="New York State medical License"
                value={stateMedicalicense}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-28" htmlFor="stateMedicalicenseNumber">
                License Number
              </label>
              <input
                id="stateMedicalicenseNumber"
                name="stateMedicalicenseNumber"
                type="number"
                placeholder="9876543210"
                value={stateMedicalicenseNumber}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-[140px]" htmlFor="licenseNumber">
                Expiration Date
              </label>

              <div
                id="dob"
                className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
              >
                <div className="ml-2">
                  <Calendar size={15} />
                </div>

                <ReactDatePicker
                  selected={stateMedicalicenseExpirationDate}
                  onChange={(date) =>
                    handleDateChange("stateMedicalicenseExpirationDate", date)
                  }
                  dateFormat={"dd/MM/yyyy"}
                  wrapperClassName="date-picker"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">
              Professional and controlled substance License
            </p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-28" htmlFor="pcslicense">
                License
              </label>
              <input
                id="pcslicense"
                name="pcslicense"
                type="text"
                placeholder="New York State medical License"
                value={pcslicense}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-28" htmlFor="pcslicenseNumber">
                License Number
              </label>
              <input
                id="pcslicenseNumber"
                name="pcslicenseNumber"
                type="number"
                placeholder="9876543210"
                value={pcslicenseNumber}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-[140px]" htmlFor="licenseNumber">
                Expiration Date
              </label>

              <div
                id="dob"
                className="border flex  items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
              >
                <div className="ml-2">
                  <Calendar size={15} />
                </div>

                <ReactDatePicker
                  selected={pcslicenseExpirationDate}
                  onChange={(date) =>
                    handleDateChange("pcslicenseExpirationDate", date)
                  }
                  dateFormat={"dd/MM/yyyy"}
                  wrapperClassName="date-picker"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licensing;
