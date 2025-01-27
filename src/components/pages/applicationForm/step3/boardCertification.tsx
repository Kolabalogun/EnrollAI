/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import DateInputField from "../Inputs/dateInput";
import TextInputField from "../Inputs/TextInput";
import { ApplicationProps } from "../step1";
import { RootState } from "@/redux/store";
import { Eye, FileBox, Pencil } from "lucide-react";
import { useRef } from "react";

const boardCertificationsData = [
  {
    title: "Board Certification 1",
    fields: [
      { label: "Name of Issuing Board", name: "boardCertification1Board" },
      { label: "Specialty", name: "boardCertification1Specialty" },
      {
        label: "Date Certified/Recertified",
        name: "boardCertification1CertifiedDate",
        type: "date",
      },
      {
        label: "Expiration Date",
        name: "boardCertification1ExpirationDate",
        type: "date",
      },
      {
        label: "Certification 1",
        name: "certificationfile1",
        type: "file",
      },
    ],
  },
  {
    title: "Board Certification 2",
    fields: [
      { label: "Name of Issuing Board", name: "boardCertification2Board" },
      { label: "Specialty", name: "boardCertification2Specialty" },
      {
        label: "Date Certified/Recertified",
        name: "boardCertification2CertifiedDate",
        type: "date",
      },
      {
        label: "Expiration Date",
        name: "boardCertification2ExpirationDate",
        type: "date",
      },
      {
        label: "Certification 2",
        name: "certificationfile2",
        type: "file",
      },
    ],
  },
  {
    title: "Board Certification 3",
    fields: [
      { label: "Name of Issuing Board", name: "boardCertification3Board" },
      { label: "Specialty", name: "boardCertification3Specialty" },
      {
        label: "Date Certified/Recertified",
        name: "boardCertification3CertifiedDate",
        type: "date",
      },
      {
        label: "Expiration Date",
        name: "boardCertification3ExpirationDate",
        type: "date",
      },
      {
        label: "Certification 3",
        name: "certificationfile3",
        type: "file",
      },
    ],
  },
];

const BoardCertification = ({
  form,
  handleChange,
  errors,
  handleFileChange,
}: ApplicationProps) => {
  const { user } = useSelector((state: RootState) => state.auth);

  const fileInputRef = useRef<any>(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      .<p className="font-semibold text-base">Board Certifications</p>
      <div className="grid grid-cols-3 gap-10">
        {boardCertificationsData.map((section, index) => (
          <div key={index} className="flex flex-col gap-3">
            <p className="font-semibold">{section.title}</p>
            {section.fields.map((field, fieldIndex) => (
              <div
                key={fieldIndex}
                className="raleway text-xs flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium"
              >
                {field.type === "file" && (
                  <p className="text-xs   w-28 font-medium">{field.label}:</p>
                )}
                {field.type === "date" ? (
                  <DateInputField
                    label={field.label}
                    selected={form.step3.boards[field.name]}
                    disabled={user?.accountType !== "provider" ? true : false}
                    error={!!errors[field.name]}
                    onChange={(date) =>
                      handleChange("step3", "boards", field.name, date)
                    }
                  />
                ) : field.type === "file" ? (
                  <div className="flex gap-2 items-center ">
                    {form.step3.boards[field.name] &&
                    (form.step3.boards[field.name] instanceof File ||
                      typeof form.step3.boards[field.name] === "string") ? (
                      <>
                        <div className="flex gap-2 items-center justify-between w-full border rounded py-2 px-2">
                          <div className="">
                            <FileBox className="text-gray-600  " size={18} />
                          </div>
                          <p className="flex flex-1 text-xs font-semibold">
                            {form.step3.boards[field.name]?.name ||
                              "File Uploaded"}
                          </p>

                          <div className="flex items-center gap-1">
                            {user?.accountType !== "provider" &&
                              form.step3.boards[field.name] &&
                              typeof form.step3.boards[field.name] ===
                                "string" && (
                                <Eye
                                  className="text-secondary cursor-pointer "
                                  size={16}
                                  onClick={() => {
                                    if (
                                      typeof form.step3.boards[field.name] ===
                                      "string"
                                    ) {
                                      const fileURL =
                                        form.step3.boards[field.name];
                                      window.open(fileURL, "_blank");
                                    }
                                  }}
                                />
                              )}

                            {user?.accountType === "provider" && (
                              <Pencil
                                className="text-secondary cursor-pointer "
                                size={16}
                                onClick={handleFileClick}
                              />
                            )}

                            {user?.accountType === "provider" &&
                              form.step3.boards[field.name] &&
                              typeof form.step3.boards[field.name] ===
                                "string" &&
                              form.step3.boards[field.name] &&
                              typeof form.step3.boards[field.name] ===
                                "string" && (
                                <Eye
                                  className="text-secondary cursor-pointer "
                                  size={16}
                                  onClick={() => {
                                    if (
                                      typeof form.step3.boards[field.name] ===
                                      "string"
                                    ) {
                                      const fileURL =
                                        form.step3.boards[field.name];
                                      window.open(fileURL, "_blank");
                                    }
                                  }}
                                />
                              )}
                          </div>
                        </div>

                        {/* Hidden file input for Pencil Icon */}
                        <input
                          type="file"
                          ref={fileInputRef}
                          name={field.name}
                          style={{ display: "none" }}
                          readOnly={user?.accountType === "organization"}
                          onChange={(e) =>
                            handleFileChange("step3", "boards", field.name, e)
                          }
                        />
                      </>
                    ) : (
                      <input
                        type="file"
                        name={field.name}
                        readOnly={
                          user?.accountType === "organization" ? true : false
                        }
                        onChange={(e) =>
                          handleFileChange("step3", "boards", field.name, e)
                        }
                        className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
                      />
                    )}
                  </div>
                ) : (
                  <TextInputField
                    key={field.name}
                    label={field.label}
                    readOnly={user?.accountType !== "provider" ? true : false}
                    error={errors[field.name]}
                    name={field.name}
                    value={form.step3.boards[field.name]}
                    onChange={(e) =>
                      handleChange(
                        "step3",
                        "boards",
                        field.name,
                        e.target.value
                      )
                    }
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 pt-6">
        <p className="font-semibold">Additional Board Certification</p>
        <div className="raleway text-xs flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium">
          <label className="   ">
            Have you applied for board certification other than those indicated
            above?
          </label>
          <input
            type="checkbox"
            disabled={user?.accountType !== "provider" ? true : false}
            checked={form.step3.boards.additionalBoardCertificationApplied}
            onChange={(e) =>
              handleChange(
                "step3",
                "boards",
                "additionalBoardCertificationApplied",
                e.target.checked
              )
            }
          />
        </div>
        <div className="raleway text-xs flex xl:flex-row flex-col w-full flex-1 gap-2 xl:items-center font-medium">
          <TextInputField
            label="If no, list the board and describe your intent for certification"
            name="additionalBoardCertificationIntent"
            readOnly={user?.accountType !== "provider" ? true : false}
            value={form.step3.boards.additionalBoardCertificationIntent || ""}
            onChange={(e) =>
              handleChange(
                "step3",
                "boards",
                "additionalBoardCertificationIntent",
                e.target.value
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BoardCertification;
