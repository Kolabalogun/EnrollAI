/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import DateInputField from "../Inputs/dateInput";
import TextInputField from "../Inputs/TextInput";
import { ApplicationProps } from "../step1";
import { RootState } from "@/redux/store";
import { Eye, FileBox, Pencil, X } from "lucide-react";
import { useRef } from "react";

const mainLicenseRegistration = [
  {
    title: "Medical License/Registration",
    fields: [
      {
        subField: "DEA Registration",
        fields: [
          { label: "DEA Registration Number", name: "deaRegistrationNumber" },
          {
            label: "DEA Expiration Date",
            name: "deaExpirationDate",
            type: "date",
          },
          {
            label: "DEA Expiration File",
            name: "deaExpirationFile",
            type: "file",
          },
        ],
      },
      {
        subField: "Controlled Dangerous Substance",
        fields: [
          {
            label: "Controlled Dangerous Substance Certificate Number",
            name: "controlledSubstanceCertificate",
          },
          {
            label: "Controlled Substance Expiration Date",
            name: "controlledSubstanceExpirationDate",
            type: "date",
          },
          {
            label: "Controlled Substance Expiration File",
            name: "controlledSubstanceExpirationFile",
            type: "file",
          },
        ],
      },

      {
        subField: "ECFMG (For Foreign Medical Students)",
        fields: [
          {
            label: "ECFMG Number",
            name: "ECFMGNumber",
          },
          { label: "Date Issued", name: "ecfmIssueDate", type: "date" },
          { label: "Valid Through", name: "ecfmValidThrough", type: "date" },
          {
            label: "ECFMG File",
            name: "ECFMGFile",
            type: "file",
          },
        ],
      },
      {
        subField: "Medicaid",
        fields: [
          {
            label: "Medicaid ID Number",
            name: "medicaidIDNumber",
          },

          {
            label: "Medicaid Certificate",
            name: "medicaidCertificate",
            type: "file",
          },
        ],
      },
    ],
  },
];

const medicalLicensesData = [
  {
    title: "State Medical License 1",
    fields: [
      { label: "License", name: "stateMedicalLicense1" },
      { label: "License Number", name: "stateMedicalLicenseNumber1" },
      {
        label: "Expiration Date",
        name: "stateMedicalLicenseExpirationDate1",
        type: "date",
      },
      {
        label: "License File",
        name: "stateMedicalLicensefile1",
        type: "file",
      },
    ],
  },
  {
    title: "State Medical License 2",
    fields: [
      { label: "License", name: "stateMedicalLicense2" },
      { label: "License Number", name: "stateMedicalLicenseNumber2" },
      {
        label: "Expiration Date",
        name: "stateMedicalLicenseExpirationDate2",
        type: "date",
      },
      {
        label: "License File",
        name: "stateMedicalLicensefile2",
        type: "file",
      },
    ],
  },
  {
    title: "State Medical License 3",
    fields: [
      { label: "License", name: "stateMedicalLicense3" },
      { label: "License Number", name: "stateMedicalLicenseNumber3" },
      {
        label: "Expiration Date",
        name: "stateMedicalLicenseExpirationDate3",
        type: "date",
      },
      {
        label: "License File",
        name: "stateMedicalLicensefile3",
        type: "file",
      },
    ],
  },
];

const Licensing = ({
  form,
  errors,
  handleChange,
  handleFileChange,
}: ApplicationProps) => {
  const { user } = useSelector((state: RootState) => state.auth);

  const fileInputRef = useRef<any>(null);

  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      <div className="space-y-5">
        <p className="font-semibold text-base">Licenses</p>
        <div>
          {mainLicenseRegistration.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <p className="font-semibold">{section.title}</p>
              {section.fields.map((subSection, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-3">
                    {subSection.subField}
                  </p>
                  <div className="grid  lg:grid-cols-2 xl:grid-cols-3 w-full gap-5">
                    {subSection.fields.map((field, fieldIndex) => (
                      <div
                        key={fieldIndex}
                        className="flex flex-col gap-1 text-xs font-medium"
                      >
                        {field.type === "file" && (
                          <p className="text-xs font-medium">{field.label}</p>
                        )}

                        {field.type === "date" ? (
                          <DateInputField
                            label={field.label}
                            selected={form.step2.medicalLicenses[field.name]}
                            error={!!errors[field.name]}
                            disabled={
                              user?.accountType === "organization"
                                ? true
                                : false
                            }
                            onChange={(date) =>
                              handleChange(
                                "step2",
                                "medicalLicenses",
                                field.name,
                                date
                              )
                            }
                          />
                        ) : field.type === "file" ? (
                          <div className="flex gap-2 items-center ">
                            {form.step2.medicalLicenses[field.name] &&
                            (form.step2.medicalLicenses[field.name] instanceof
                              File ||
                              typeof form.step2.medicalLicenses[field.name] ===
                                "string") ? (
                              <>
                                <div className="flex gap-2 items-center justify-between w-full border rounded py-2 px-2">
                                  <div className="">
                                    <FileBox
                                      className="text-gray-600  "
                                      size={18}
                                    />
                                  </div>
                                  <p className="flex flex-1 text-xs font-semibold">
                                    {form.step2.medicalLicenses[field.name]
                                      ?.name || "File Uploaded"}
                                  </p>

                                  <div className="flex items-center gap-1">
                                    {user?.accountType !== "provider" &&
                                      form.step2.medicalLicenses[field.name] &&
                                      typeof form.step2.medicalLicenses[
                                        field.name
                                      ] === "string" && (
                                        <Eye
                                          className="text-secondary cursor-pointer "
                                          size={16}
                                          onClick={() => {
                                            if (
                                              typeof form.step2.medicalLicenses[
                                                field.name
                                              ] === "string"
                                            ) {
                                              const fileURL =
                                                form.step2.medicalLicenses[
                                                  field.name
                                                ];
                                              window.open(fileURL, "_blank");
                                            }
                                          }}
                                        />
                                      )}

                                    {user?.accountType === "provider" && (
                                      <>
                                        {form.step2.medicalLicenses[
                                          field.name
                                        ] &&
                                        (form.step2.medicalLicenses[
                                          field.name
                                        ] instanceof File ||
                                          typeof form.step2.medicalLicenses[
                                            field.name
                                          ] === "string") ? (
                                          <X
                                            className="text-red-500 cursor-pointer"
                                            size={16}
                                            onClick={() => {
                                              handleFileChange(
                                                "step2",
                                                "medicalLicenses",
                                                field.name,
                                                null
                                              );
                                            }}
                                          />
                                        ) : (
                                          <Pencil
                                            className="text-secondary cursor-pointer"
                                            size={16}
                                            onClick={() => {
                                              fileInputRef.current?.click();
                                            }}
                                          />
                                        )}
                                      </>
                                    )}

                                    {user?.accountType === "provider" &&
                                      form.step2.medicalLicenses[field.name] &&
                                      (typeof form.step2.medicalLicenses[
                                        field.name
                                      ] === "string" ||
                                        form.step2.medicalLicenses[
                                          field.name
                                        ] instanceof File) && (
                                        <Eye
                                          className="text-secondary cursor-pointer "
                                          size={16}
                                          onClick={() => {
                                            if (
                                              typeof form.step2.medicalLicenses[
                                                field.name
                                              ] === "string"
                                            ) {
                                              const fileURL =
                                                form.step2.medicalLicenses[
                                                  field.name
                                                ];
                                              window.open(fileURL, "_blank");
                                            } else if (
                                              form.step2.medicalLicenses[
                                                field.name
                                              ] instanceof File
                                            ) {
                                              const fileURL =
                                                URL.createObjectURL(
                                                  form.step2.medicalLicenses[
                                                    field.name
                                                  ]
                                                );
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
                                  readOnly={
                                    user?.accountType === "organization"
                                  }
                                  onChange={(e) =>
                                    handleFileChange(
                                      "step2",
                                      "medicalLicenses",
                                      field.name,
                                      e
                                    )
                                  }
                                />
                              </>
                            ) : (
                              <input
                                type="file"
                                name={field.name}
                                readOnly={
                                  user?.accountType === "organization"
                                    ? true
                                    : false
                                }
                                onChange={(e) =>
                                  handleFileChange(
                                    "step2",
                                    "medicalLicenses",
                                    field.name,
                                    e
                                  )
                                }
                                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
                              />
                            )}
                          </div>
                        ) : (
                          <TextInputField
                            key={field.name}
                            label={field.label}
                            readOnly={
                              user?.accountType === "organization"
                                ? true
                                : false
                            }
                            error={errors[field.name]}
                            name={field.name}
                            value={form.step2.medicalLicenses[field.name]}
                            onChange={(e) =>
                              handleChange(
                                "step2",
                                "medicalLicenses",
                                field.name,
                                e.target.value
                              )
                            }
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <p className="font-semibold text-base">Other Licenses</p>
        <div className="grid  lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {medicalLicensesData.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <p className="font-semibold">{section.title}</p>
              {section.fields.map((field, fieldIndex) => (
                <div
                  key={fieldIndex}
                  className="raleway text-xs flex   flex-col w-full flex-1 gap-2   font-medium"
                >
                  {field.type === "file" && (
                    <p className="text-xs      font-medium ">{field.label}:</p>
                  )}
                  {field.type === "date" ? (
                    <DateInputField
                      label={field.label}
                      disabled={user?.accountType !== "provider" ? true : false}
                      selected={form.step2.otherMedLicenses[field.name]}
                      error={!!errors[field.name]}
                      onChange={(date) =>
                        handleChange(
                          "step2",
                          "otherMedLicenses",
                          field.name,
                          date
                        )
                      }
                    />
                  ) : field.type === "file" ? (
                    <div className="flex gap-2 items-center ">
                      {form.step2.otherMedLicenses[field.name] &&
                      (form.step2.otherMedLicenses[field.name] instanceof
                        File ||
                        typeof form.step2.otherMedLicenses[field.name] ===
                          "string") ? (
                        <>
                          <div className="flex gap-2 items-center justify-between w-full border rounded py-2 px-2">
                            <div className="">
                              <FileBox className="text-gray-600  " size={18} />
                            </div>
                            <p className="flex flex-1 text-xs font-semibold">
                              {form.step2.otherMedLicenses[field.name]?.name ||
                                "File Uploaded"}
                            </p>

                            <div className="flex items-center gap-1">
                              {user?.accountType !== "provider" &&
                                form.step2.otherMedLicenses[field.name] &&
                                typeof form.step2.otherMedLicenses[
                                  field.name
                                ] === "string" && (
                                  <Eye
                                    className="text-secondary cursor-pointer "
                                    size={16}
                                    onClick={() => {
                                      if (
                                        typeof form.step2.otherMedLicenses[
                                          field.name
                                        ] === "string"
                                      ) {
                                        const fileURL =
                                          form.step2.otherMedLicenses[
                                            field.name
                                          ];
                                        window.open(fileURL, "_blank");
                                      }
                                    }}
                                  />
                                )}

                              {user?.accountType === "provider" && (
                                <>
                                  {form.step2.otherMedLicenses[field.name] &&
                                  (form.step2.otherMedLicenses[
                                    field.name
                                  ] instanceof File ||
                                    typeof form.step2.otherMedLicenses[
                                      field.name
                                    ] === "string") ? (
                                    <X
                                      className="text-red-500 cursor-pointer"
                                      size={16}
                                      onClick={() => {
                                        handleFileChange(
                                          "step2",
                                          "otherMedLicenses",
                                          field.name,
                                          null
                                        );
                                      }}
                                    />
                                  ) : (
                                    <Pencil
                                      className="text-secondary cursor-pointer"
                                      size={16}
                                      onClick={() => {
                                        fileInputRef.current?.click();
                                      }}
                                    />
                                  )}
                                </>
                              )}

                              {user?.accountType === "provider" &&
                                form.step2.otherMedLicenses[field.name] &&
                                (typeof form.step2.otherMedLicenses[
                                  field.name
                                ] === "string" ||
                                  form.step2.otherMedLicenses[
                                    field.name
                                  ] instanceof File) && (
                                  <Eye
                                    className="text-secondary cursor-pointer "
                                    size={16}
                                    onClick={() => {
                                      if (
                                        typeof form.step2.otherMedLicenses[
                                          field.name
                                        ] === "string"
                                      ) {
                                        const fileURL =
                                          form.step2.otherMedLicenses[
                                            field.name
                                          ];
                                        window.open(fileURL, "_blank");
                                      } else if (
                                        form.step2.otherMedLicenses[
                                          field.name
                                        ] instanceof File
                                      ) {
                                        const fileURL = URL.createObjectURL(
                                          form.step2.otherMedLicenses[
                                            field.name
                                          ]
                                        );
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
                              handleFileChange(
                                "step2",
                                "otherMedLicenses",
                                field.name,
                                e
                              )
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
                            handleFileChange(
                              "step2",
                              "otherMedLicenses",
                              field.name,
                              e
                            )
                          }
                          className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
                        />
                      )}
                    </div>
                  ) : (
                    <TextInputField
                      key={field.name}
                      label={field.label}
                      error={errors[field.name]}
                      readOnly={user?.accountType !== "provider" ? true : false}
                      name={field.name}
                      value={form.step2.otherMedLicenses[field.name]}
                      onChange={(e) =>
                        handleChange(
                          "step2",
                          "otherMedLicenses",
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
      </div>
    </div>
  );
};

export default Licensing;
