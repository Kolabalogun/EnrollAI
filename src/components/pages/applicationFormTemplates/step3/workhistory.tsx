import { Calendar, Trash2 } from "lucide-react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ApplicationProps } from "../../applicationForm/step1";

const WorkHistory = ({
  form,
  removeField,
  removeSection,
}: ApplicationProps) => {
  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Work History</p>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-5">
        {Object.keys(form.workHistory).map((field) => {
          const fieldValue = form.workHistory[field];

          return (
            <div className="space-y-2  " key={field}>
              <div className="flex flex-row justify-between itc gap-3">
                {field === "previousEmploymentEndDate" ||
                field === "previousEmploymentStartDate" ||
                field === "previousEmploymentStartDate" ||
                field === "currentEmploymentEndDate" ? (
                  <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium relative">
                    <label htmlFor={field} className="capitalize">
                      {field.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    <div className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full">
                      <div className="ml-2">
                        <Calendar size={15} />
                      </div>
                      <ReactDatePicker
                        selected={fieldValue}
                        disabled
                        dateFormat={"dd/MM/yyyy"}
                        wrapperClassName="date-picker"
                      />
                    </div>
                    <Trash2
                      className="absolute right-0 top-8 cursor-pointer"
                      size={18}
                      onClick={() => removeField("workHistory", field)}
                    />
                  </div>
                ) : (
                  <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium relative">
                    <label className="capitalize" htmlFor={field}>
                      {field.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    <div className="flex items-center ">
                      <input
                        id={field}
                        name={field}
                        type={"text"}
                        placeholder={field}
                        value={fieldValue}
                        readOnly
                        className="border rounded-md p-2 placeholder:capitalize outline-[0.5px] flex-1 outline-secondary"
                      />
                      <Trash2
                        className=" -ml-7 cursor-pointer"
                        size={18}
                        onClick={() => removeField("workHistory", field)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="bg-red-500 text-xs raleway font-semibold text-white rounded px-4 py-2"
        onClick={() => removeSection("workHistory")}
      >
        Delete Section
      </button>
    </div>
  );
};

export default WorkHistory;
