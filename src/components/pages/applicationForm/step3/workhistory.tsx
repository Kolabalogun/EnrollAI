import { Calendar } from "lucide-react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ApplicationProps } from "../step1";

const WorkHistory = ({
  form,
  handleChange,
  handleDateChange,
}: ApplicationProps) => {
  const {
    currentEmploymentPosition,
    currentEmploymentStartDate,
    currentEmploymentEndDate,
    previousEmploymentPosition,
    previousEmploymentStartDate,
    previousEmploymentEndDate,
    previousEmploymentGAP,
    previousEmploymentMilitaryService,
  } = form;

  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Work History</p>
      <div className="space-y-10 ">
        <div className="flex flex-1 gap-24">
          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">Current Employment</p>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-24" htmlFor="currentEmploymentPosition">
                Position
              </label>
              <input
                id="currentEmploymentPosition"
                name="currentEmploymentPosition"
                type="text"
                placeholder="Cardiologist, Heart Health Clinic"
                value={currentEmploymentPosition}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-[140px]" htmlFor="currentEmploymentStartDate">
                Start Date
              </label>

              <div
                id="currentEmploymentStartDate"
                className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
              >
                <div className="ml-2">
                  <Calendar size={15} />
                </div>

                <ReactDatePicker
                  selected={currentEmploymentStartDate}
                  onChange={(date) =>
                    handleDateChange("currentEmploymentStartDate", date)
                  }
                  dateFormat={"dd/MM/yyyy"}
                  wrapperClassName="date-picker"
                />
              </div>
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-[140px]" htmlFor="currentEmploymentEndDate">
                End Date
              </label>

              <div
                id="currentEmploymentEndDate"
                className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
              >
                <div className="ml-2">
                  <Calendar size={15} />
                </div>

                <ReactDatePicker
                  selected={currentEmploymentEndDate}
                  onChange={(date) =>
                    handleDateChange("currentEmploymentEndDate", date)
                  }
                  dateFormat={"dd/MM/yyyy"}
                  wrapperClassName="date-picker"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">Previous Employment</p>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-24" htmlFor="previousEmploymentPosition">
                Position
              </label>
              <input
                id="previousEmploymentPosition"
                name="previousEmploymentPosition"
                type="text"
                placeholder="Cardiologist, Heart Health Clinic"
                value={previousEmploymentPosition}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-[140px]"
                htmlFor="previousEmploymentStateDate"
              >
                State Date
              </label>

              <div
                id="previousEmploymentStateDate"
                className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
              >
                <div className="ml-2">
                  <Calendar size={15} />
                </div>

                <ReactDatePicker
                  selected={previousEmploymentStartDate}
                  onChange={(date) =>
                    handleDateChange("previousEmploymentStartDate", date)
                  }
                  dateFormat={"dd/MM/yyyy"}
                  wrapperClassName="date-picker"
                />
              </div>
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-[140px]" htmlFor="previousEmploymentEndDate">
                End Date
              </label>

              <div
                id="previousEmploymentEndDate"
                className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
              >
                <div className="ml-2">
                  <Calendar size={15} />
                </div>

                <ReactDatePicker
                  selected={previousEmploymentEndDate}
                  onChange={(date) =>
                    handleDateChange("previousEmploymentEndDate", date)
                  }
                  dateFormat={"dd/MM/yyyy"}
                  wrapperClassName="date-picker"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-3">
            <div className="raleway text-xs mt-5 flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-28" htmlFor="previousEmploymentGAP">
                Gap in work
              </label>
              <input
                id="previousEmploymentGAP"
                name="previousEmploymentGAP"
                type="text"
                placeholder="None"
                value={previousEmploymentGAP}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-28"
                htmlFor="previousEmploymentMilitaryService"
              >
                Military Service
              </label>
              <input
                id="previousEmploymentMilitaryService"
                name="previousEmploymentMilitaryService"
                type="text"
                placeholder="None"
                value={previousEmploymentMilitaryService}
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

export default WorkHistory;
