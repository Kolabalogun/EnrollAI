import { Trash2 } from "lucide-react";
import { ApplicationProps } from "../../applicationForm/step1";

const MalpracticeInsurance = ({
  form,
  removeSubField,
  removeSection,
}: ApplicationProps) => {
  const malpracticeCategories = Object.keys(form.malpracticeInformation);

  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Malpractice Insurance</p>
      <div className="  grid lg:grid-cols-2 gap-16">
        {malpracticeCategories.map((category) => {
          const categoryFields = form.malpracticeInformation[category];

          return (
            <div key={category} className="flex flex-1 gap-10">
              <div className="flex flex-col flex-1 gap-3">
                <p className="font-semibold capitalize">{category}</p>
                {Object.keys(categoryFields).map((field) => {
                  const fieldValue = categoryFields[field];

                  return (
                    <div
                      key={field}
                      className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium"
                    >
                      <label className=" capitalize" htmlFor={field}>
                        {field
                          .replace("liabilityClaimsHistory", " ")
                          .replace("malpracticeInsurance", " ")}
                      </label>
                      <div className="flex items-center">
                        <input
                          id={field}
                          name={field}
                          type={"text"}
                          placeholder={field
                            .replace("liabilityClaimsHistory", " ")
                            .replace("malpracticeInsurance", " ")
                            .trim()}
                          value={fieldValue}
                          readOnly
                          className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
                        />

                        <Trash2
                          className="-ml-7 z-50 cursor-pointer"
                          size={18}
                          onClick={() =>
                            removeSubField(
                              "malpracticeInformation",
                              category,
                              field
                            )
                          }
                        />
                      </div>
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
        onClick={() => removeSection("malpracticeInformation")}
      >
        Delete Section
      </button>
    </div>
  );
};

export default MalpracticeInsurance;
