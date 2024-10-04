import { Trash2 } from "lucide-react"; // Import Trash2 icon
import { ApplicationProps } from "../../applicationForm/step1";

const Education = ({ form, removeSection, removeField }: ApplicationProps) => {
  const educationCategories = Object.keys(form.educationInformation); // Get keys of educationInformation

  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Education</p>
      <div className="space-y-10">
        {educationCategories.map((category) => {
          const categoryFields = form.educationInformation[category];

          return (
            <div key={category} className="flex flex-1 gap-10">
              <div className="flex flex-col flex-1 gap-3">
                <p className="font-semibold capitalize">{category}</p>
                {Object.keys(categoryFields).map((field) => {
                  const fieldValue = categoryFields[field];

                  return (
                    <div
                      key={field}
                      className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium"
                    >
                      <label className="w-16 capitalize" htmlFor={field}>
                        {field.replace(/([A-Z])/g, " $1").trim()}
                      </label>
                      <input
                        id={field}
                        name={field}
                        type={field.includes("YOG") ? "number" : "text"}
                        placeholder={field.replace(/([A-Z])/g, " ").trim()}
                        value={fieldValue}
                        readOnly
                        className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
                      />
                      <Trash2
                        className="ml-2 cursor-pointer"
                        size={18}
                        onClick={() =>
                          removeField("educationInformation", field)
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="bg-red-500 text-xs raleway font-semibold text-white rounded px-4 py-2"
        onClick={() => removeSection("educationInformation")}
      >
        Delete Section
      </button>
    </div>
  );
};

export default Education;
