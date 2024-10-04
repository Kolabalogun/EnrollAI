import { Calendar } from "lucide-react";
import { ApplicationProps } from "../step1";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AdditionalDocument = ({
  form,
  handleChange,
  handleDateChange,
}: ApplicationProps) => {
  const {
    additionalDocumentstateMedicalicense,
    additionalDocumentstateMedicalicenseNumber,
    additionalDocumentstateMedicalicenseExpirationDate,
    additionalDocumentPcslicenseExpirationDate,
    additionalDocumentPcslicense,
    additionalDocumentPcslicenseNumber,
  } = form;

  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Additional Documents</p>
      <div className="space-y-10 ">
        <div className="flex flex-1 xl:flex-row flex-col gap-10 xl:gap-24">
          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">State Medical License</p>
            <div className="raleway text-xs  flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium">
              <label
                className="w-28"
                htmlFor="additionalDocumentstateMedicalicense"
              >
                License
              </label>
              <input
                id="additionalDocumentstateMedicalicense"
                name="additionalDocumentstateMedicalicense"
                type="text"
                placeholder="New York State medical License"
                value={additionalDocumentstateMedicalicense}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs  flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium">
              <label
                className="w-28"
                htmlFor="additionalDocumentstateMedicalicenseNumber"
              >
                License Number
              </label>
              <input
                id="additionalDocumentstateMedicalicenseNumber"
                name="additionalDocumentstateMedicalicenseNumber"
                type="text"
                placeholder="9876543210"
                value={additionalDocumentstateMedicalicenseNumber}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs  flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium">
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
                  selected={additionalDocumentstateMedicalicenseExpirationDate}
                  onChange={(date) =>
                    handleDateChange(
                      "additionalDocumentstateMedicalicenseExpirationDate",
                      date
                    )
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
            <div className="raleway text-xs  flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium">
              <label className="w-28" htmlFor="additionalDocumentPcslicense">
                License
              </label>
              <input
                id="additionalDocumentPcslicense"
                name="additionalDocumentPcslicense"
                type="text"
                placeholder="New York State medical License"
                value={additionalDocumentPcslicense}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs  flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium">
              <label
                className="w-28"
                htmlFor="additionalDocumentPcslicenseNumber"
              >
                License Number
              </label>
              <input
                id="additionalDocumentPcslicenseNumber"
                name="additionalDocumentPcslicenseNumber"
                type="text"
                placeholder="9876543210"
                value={additionalDocumentPcslicenseNumber}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs  flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium">
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
                  selected={additionalDocumentPcslicenseExpirationDate}
                  onChange={(date) =>
                    handleDateChange(
                      "additionalDocumentPcslicenseExpirationDate",
                      date
                    )
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

export default AdditionalDocument;
