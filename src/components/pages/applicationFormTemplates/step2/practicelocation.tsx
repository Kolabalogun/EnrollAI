import { Trash2 } from "lucide-react";

import { E164Number } from "libphonenumber-js/core";
import PhoneInput from "react-phone-input-2";
import { ApplicationProps } from "../../applicationForm/step1";

const PracticeLocation = ({
  form,
  removeSection,
  removeSubField,
}: ApplicationProps) => {
  const practiceLocationCategories = Object.keys(form.practiceLocation);

  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Practice Location</p>
      <div className="  grid lg:grid-cols-2 gap-16">
        {practiceLocationCategories.map((category) => {
          const categoryFields = form.practiceLocation[category];

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
                          .replace("primarypracticelocation2", " ")
                          .replace("primarypracticelocation", " ")}
                      </label>
                      <div className="flex items-center">
                        {field.includes("Contact") || field.includes("Fax") ? (
                          <PhoneInput
                            country="ng"
                            placeholder="(000) - 123 - 4567"
                            value={fieldValue as E164Number | undefined}
                            buttonStyle={{ borderColor: "#e2e8f0" }}
                            dropdownStyle={{ fontSize: 13 }}
                            inputStyle={{
                              height: "2.2rem",
                              fontFamily: "raleway",
                              borderColor: "#e2e8f0",
                              borderRadius: "6px",
                              width: "100%",
                            }}
                          />
                        ) : (
                          <input
                            id={field}
                            name={field}
                            type={field.includes("Email") ? "email" : "text"}
                            placeholder={field
                              .replace("primarypracticelocation2", " ")
                              .replace("primarypracticelocation", " ")
                              .trim()}
                            value={fieldValue}
                            readOnly
                            className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
                          />
                        )}
                        <Trash2
                          className="-ml-7 z-50 cursor-pointer"
                          size={18}
                          onClick={() =>
                            removeSubField("practiceLocation", category, field)
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
        onClick={() => removeSection("practiceLocation")}
      >
        Delete Section
      </button>
    </div>
  );
};

export default PracticeLocation;
