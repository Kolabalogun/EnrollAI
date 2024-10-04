import { Trash2 } from "lucide-react";
import { ApplicationProps } from "../../applicationForm/step1";

const ProfessionalIDTemplate = ({
  form,
  removeSection,
  removeField,
}: ApplicationProps) => {
  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Professional IDs</p>
      <div className="space-y-2">
        <div className="flex flex-row justify-between gap-3">
          {Object.keys(form.professionID).map((field) => {
            const fieldValue = form.professionID[field];

            return (
              <div
                key={field}
                className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium relative"
              >
                <label className="capitalize" htmlFor={field}>
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <div className="flex items-center">
                  <input
                    id={field}
                    name={field}
                    type={field === "npi" ? "number" : "text"}
                    placeholder={field.replace(/([A-Z])/g, " ")}
                    value={fieldValue}
                    readOnly
                    className="border rounded-md p-2 placeholder:capitalize outline-[0.5px] outline-secondary flex-1"
                  />
                  <Trash2
                    className="ml-2 cursor-pointer"
                    size={18}
                    onClick={() => removeField("professionID", field)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        className="bg-red-500 text-xs raleway font-semibold text-white rounded px-4 py-2"
        onClick={() => removeSection("professionID")}
      >
        Delete Section
      </button>
    </div>
  );
};

export default ProfessionalIDTemplate;
