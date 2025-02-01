/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRightIcon } from "lucide-react";

import { useEffect, useState } from "react";
import { ApplicationFormInitialState } from "@/constant/data/applicationsdata";

import { SubmitButton } from "@/components/common";
import SecondaryButton from "@/components/common/buttons/secondaryButton";
import { ApplicationFormInterface } from "@/lib/types";
import {
  deleteProviderApplication,
  getApplicationsById,
  updateProviderApplication,
} from "@/services/applications";
import showToast from "@/components/common/showtoast";
import { Spinner, useDisclosure, useToast } from "@chakra-ui/react";
import Step1 from "@/components/pages/applicationForm/step1";
import Step3 from "@/components/pages/applicationForm/step3";
import Step2 from "@/components/pages/applicationForm/step2";

import ConfirmationModal from "@/components/modals/confirmationModal";
import { updateProviderApplicationByOrg } from "@/services/org/applications";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const validateForm = (
  form: ApplicationFormInterface
): Record<string, string> => {
  const errors: Record<string, string> = {};

  const isEmpty = (value: unknown) =>
    value === "" || value === null || value === undefined;

  // Validate Personal Information
  for (const [key, value] of Object.entries(form.step1.personalInformation)) {
    if (isEmpty(value)) {
      errors[key] = `${key} is required`;
    }
  }

  // Validate Practice Information
  for (const [key, value] of Object.entries(form.step1.practiceInformation)) {
    if (isEmpty(value)) {
      errors[key] = `${key} is required`;
    }
  }

  // Validate Education
  for (const [key, value] of Object.entries(form.step1.education)) {
    if (isEmpty(value)) {
      errors[key] = `${key} is required`;
    }
  }

  return errors;
};

const ApplicationsDetails = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const { user } = useSelector((state: RootState) => state.auth);
  const [form, setForm] = useState<any>(ApplicationFormInitialState);
  const [isLoadingPage, setPageLoading] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [pageNo, setPageNo] = useState<number>(1);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: deleteIsOpen,
    onClose: deleteOnClose,
    onOpen: deleteOnOpen,
  } = useDisclosure();

  const {
    isOpen: approveIsOpen,
    onClose: approveOnClose,
    onOpen: approveOnOpen,
  } = useDisclosure();

  const {
    isOpen: declineIsOpen,
    onClose: declineOnClose,
    onOpen: declineOnOpen,
  } = useDisclosure();

  const getApplication = async (load?: boolean) => {
    if (!id) return;
    load && setPageLoading(true);
    try {
      const res = await getApplicationsById(id);
      if (res.success) {
        setForm(res?.data?.application);
      } else {
        setForm(ApplicationFormInitialState as any);
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to fetch Application"}`
      );
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return navigate(-1);

    getApplication(true);
  }, [id]);

  const handleChange = (
    step: string,
    parentObject: string,
    fieldName: string,
    value: string
  ) => {
    const data = {
      ...form,
      [step]: {
        ...form[step],
        [parentObject]: {
          ...form[step][parentObject],
          [fieldName]: value,
        },
      },
    };
    setForm(data);
  };
  console.log(form, "formDataformDataformDataformData");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (pageNo === 3) {
        if (isOpen) {
          if (
            new Date(form.step1.education?.internshipFromDate) >
            new Date(form.step1.education?.internshipToDate)
          ) {
            return showToast(
              toast,
              "Enroll AI",
              "error",
              `Internship Start Date cannot be after End Date`
            );
          }
          // Filter out problematic fields
          const {
            updatedAt,
            _id,
            __v,
            status,

            createdAt,
            userId,
            termsAndConditionsOne,
            termsAndConditionsTwo,
            step2: {
              medicalLicenses: {
                medicaidCertificate,
                ECFMGFile,
                controlledSubstanceExpirationFile,
                deaExpirationFile,
                ...medicalLicensesRest
              },
              otherMedLicenses: {
                stateMedicalLicensefile1,
                stateMedicalLicensefile2,
                stateMedicalLicensefile3,
                ...otherMedLicensesRest
              },
              ...restStep2
            },
            step3: {
              boards: {
                certificationfile1,
                certificationfile2,
                certificationfile3,
                ...boardRest
              },
              ...step3Rest
            },
            ...data
          } = form;

          console.warn(
            updatedAt,
            status,
            _id,
            __v,

            createdAt,
            userId,
            termsAndConditionsOne,
            termsAndConditionsTwo
          );

          // Create a new FormData instance
          const formData = new FormData();

          // Append non-file fields
          formData.append("applicationType", data.applicationType);
          formData.append(
            "organizationApplicationId",
            data.organizationApplication
          );
          formData.append("applicationTitle", data.applicationTitle);
          formData.append("organizationName", data.organizationName);
          formData.append("organizationId", data.organizationId);
          formData.append("step1", JSON.stringify(data.step1));
          formData.append(
            "step2",
            JSON.stringify({
              ...restStep2,
              medicalLicenses: medicalLicensesRest,
              otherMedLicenses: otherMedLicensesRest,
            })
          );
          formData.append(
            "step3",
            JSON.stringify({
              ...step3Rest,
              boards: boardRest,
            })
          );

          // Append files
          if (medicaidCertificate)
            formData.append("medicaidCertificate", medicaidCertificate);
          if (ECFMGFile) formData.append("ECFMGFile", ECFMGFile);
          if (controlledSubstanceExpirationFile)
            formData.append(
              "controlledSubstanceExpirationFile",
              controlledSubstanceExpirationFile
            );
          if (deaExpirationFile)
            formData.append("deaExpirationFile", deaExpirationFile);
          if (stateMedicalLicensefile1)
            formData.append(
              "stateMedicalLicensefile1",
              stateMedicalLicensefile1
            );
          if (stateMedicalLicensefile2)
            formData.append(
              "stateMedicalLicensefile2",
              stateMedicalLicensefile2
            );
          if (stateMedicalLicensefile3)
            formData.append(
              "stateMedicalLicensefile3",
              stateMedicalLicensefile3
            );
          if (certificationfile1)
            formData.append("certificationfile1", certificationfile1);
          if (certificationfile2)
            formData.append("certificationfile2", certificationfile2);
          if (certificationfile3)
            formData.append("certificationfile3", certificationfile3);

          // Debugging: Log the FormData entries
          for (const [key, value] of formData.entries()) {
            console.log(key, value);
          }

          try {
            const res = await updateProviderApplication(formData, form._id);
            console.log(res, "Response from updateProviderApplication");

            if (res.success) {
              showToast(
                toast,
                "Enroll AI",
                "success",
                `${res?.data?.message || "Application updated successfully"}`
              );
            } else {
              showToast(
                toast,
                "Enroll AI",
                "error",
                `${res?.message || "Failed to update Application"}`
              );
            }
          } catch (error: any) {
            console.log(error, "Error in updateProviderApplication");
            showToast(
              toast,
              "Enroll AI",
              "error",
              `${error.message || "Failed to update application"}`
            );
          } finally {
            onClose();
          }
        } else {
          onOpen();
        }
      } else {
        const validationErrors = validateForm(form);
        if (Object.keys(validationErrors).length > 0) {
          showToast(
            toast,
            "Enroll AI",
            "error",
            `Please fill all required fields.`
          );
          setErrors(validationErrors);
        } else {
          setErrors({});
          setPageNo(pageNo + 1);
        }
      }
    } catch (error: any) {
      console.log(error, "Error in handleUpdate");
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to update application"}`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (
    step: string,
    parentObject: string,
    fieldName: string,
    event: React.ChangeEvent<HTMLInputElement> | null
  ) => {
    let file;

    if (event === null) {
      // Reset the field and remove any previously associated file
      const data = {
        ...form,
        [step]: {
          ...form[step],
          [parentObject]: {
            ...form[step][parentObject],
            [fieldName]: "", // Reset the field to an empty string
          },
        },
      };
      setForm(data);
      return;
    } else {
      file = event.target.files?.[0];
    }

    if (file) {
      const maxSize = 3 * 1024 * 1024; // 3 MB in bytes
      if (file.size > maxSize) {
        showToast(
          toast,
          "Enroll AI",
          "error",
          "File size exceeds the limit of 3 MB"
        );
        return;
      }

      // Update the field with the new file
      const data = {
        ...form,
        [step]: {
          ...form[step],
          [parentObject]: {
            ...form[step][parentObject],
            [fieldName]: file,
          },
        },
      };
      setForm(data);
    }
  };

  const handleResidencyChange = (
    index: number,
    fieldName: string,
    value: string
  ) => {
    const data = {
      ...form,
      step2: {
        ...form.step2,
        residencies: [
          ...form.step2.residencies.map((item: any, i: number) =>
            i === index
              ? {
                  ...item,
                  [fieldName]: value,
                }
              : item
          ),
        ],
      },
    };
    setForm(data);
  };

  const handleDeleteApplication = async (id: string) => {
    setLoading(true);
    try {
      const res = await deleteProviderApplication(id);

      console.log(res);

      showToast(
        toast,
        "Enroll AI",
        "success",
        "Application deleted successfully"
      );

      navigate(-1);
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to delete Application. Please try later"} `
      );
    } finally {
      setLoading(false);
      deleteOnClose();
    }
  };

  const handleUpdateApplication = async (id: string, status: string) => {
    setLoading(true);
    try {
      console.log(id, status);

      const res = await updateProviderApplicationByOrg(id, status);

      console.log(res);

      if (res.success) {
        setForm(res?.data?.application);
        showToast(
          toast,
          "Enroll AI",
          "success",
          `${res.data.message || "Application updated successfully"}`
        );
      } else {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `${res.message || "Failed to approve Application. Please try later"} `
        );
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to approve Application. Please try later"} `
      );
    } finally {
      setLoading(false);
      approveOnClose();
      declineOnClose();
    }
  };

  if (isLoadingPage)
    return (
      <div className="h-[80vh] bg-white/10 space-y-1  flex-col flex items-center justify-center ">
        <Spinner color="purple" />
        <p className="font-semibold">Loading Application Details...</p>
      </div>
    );

  return (
    <section className="space-y-5 custom-scrollbar flex mb-20 flex-col">
      <ConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        title="Application"
        message="Are you sure want to update this Application?"
        buttonText="Update"
        isLoading={isLoading}
        onConfirm={handleSubmit}
      />
      <ConfirmationModal
        onClose={deleteOnClose}
        isOpen={deleteIsOpen}
        buttonText="Delete"
        isLoading={isLoading}
        message="Are you sure you want to delete your application? Once deleted, it will be permanently removed from our database."
        onConfirm={() => {
          handleDeleteApplication(form._id);
        }}
      />
      <ConfirmationModal
        onClose={approveOnClose}
        isOpen={approveIsOpen}
        buttonText="Approve"
        isLoading={isLoading}
        message="Are you sure you want to approve your application? "
        onConfirm={() => {
          handleUpdateApplication(form._id, "approved");
        }}
      />
      <ConfirmationModal
        onClose={declineOnClose}
        isOpen={declineIsOpen}
        buttonText="Decline"
        isLoading={isLoading}
        message="Are you sure you want to decline your application? "
        onConfirm={() => {
          handleUpdateApplication(form._id, "declined");
        }}
      />
      <div className="flex flex-col gap-4">
        <div onClick={() => navigate(-1)} className="flex gap-3 items-center">
          <ChevronLeft size={15} />
          <p className="font-semibold cursor-pointer text-xs">Go back</p>
        </div>
        <p className="font-semibold text-3xl">Application Details</p>
      </div>

      <div className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-3 md:p-5 space-y-10">
        <div className="space-y-2">
          <div className="space-y-1">
            <p className="font-semibold capitalize text-base ">
              {form?.applicationType || "N/A"}
            </p>
            <p className="text-[12px] capitalize font-medium text-[#667085]">
              {form?.organizationApplication?.organizationName ||
                form?.organizationName ||
                "N/A"}
            </p>
          </div>
          <p className="text-[12px] capitalize font-medium text-[#667085]">
            {form?.applicationTitle || "N?A"}
          </p>
        </div>

        <div className="space-y-4">
          {/* <div className="space-y-1">
            <p className="font-semibold text-base ">CAQH Credentialing</p>
            <p className="text-[12px] font-medium text-[#667085]">
              Lorem Ipsum Organization
            </p>
          </div> */}
          <form onSubmit={handleSubmit}>
            {pageNo === 2 ? (
              <Step2
                form={form}
                errors={errors}
                handleResidencyChange={handleResidencyChange}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                id
              />
            ) : pageNo === 3 ? (
              <Step3
                form={form}
                errors={errors}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                id
              />
            ) : (
              <Step1
                form={form}
                errors={errors}
                handleChange={handleChange}
                id
              />
            )}

            {form?.organizationName && (
              <div className="flex justify-end gap-5 my-10 items-center">
                {pageNo > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (pageNo > 1) {
                        setPageNo(pageNo - 1);
                      }
                    }}
                    className="py-2 raleway px-8 border rounded-md font-semibold text-xs"
                  >
                    Previous
                  </button>
                )}

                {form?.status !== "pending" ? (
                  <>
                    {pageNo !== 3 && (
                      <SubmitButton
                        isLoading={isLoading}
                        className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
                      >
                        <p className="font-bold text-xs">Next</p>

                        <ChevronRightIcon size={15} />
                      </SubmitButton>
                    )}
                  </>
                ) : (
                  <SubmitButton
                    isLoading={isLoading}
                    className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
                  >
                    <p className="font-bold text-xs">
                      {pageNo === 3 ? "Update Application" : "Next"}
                    </p>

                    {pageNo !== 3 && <ChevronRightIcon size={15} />}
                  </SubmitButton>
                )}
              </div>
            )}
          </form>

          <div className="flex flex-col xl:flex-row justify-between space-y-4 border-b-2   py-4  ">
            <div className="flex gap-5 items-center">
              <p className="text-[#000] text-lg    font-semibold ">
                Application Status:
              </p>
              <div
                className={`self-center text-xs   items-center justify-center flex gap-2 font-medium p-0.5 rounded-full capitalize  w-32 ${
                  form?.status === "approved"
                    ? "border-[#21A0A0] text-[#21A0A0] bg-[#d3ecec] "
                    : form?.status === "pending"
                    ? "border-yellow-500 text-yellow-500 bg-yellow-500/10"
                    : "border-[#fb0000] text-[#fb0000]"
                } border `}
              >
                {form?.status}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 lg:items-center py-10">
            {form?.status !== "approved" && (
              <SecondaryButton
                title={"Delete Application"}
                handleClick={() => {
                  deleteOnOpen();
                }}
              />
            )}
            {user?.accountType === "organization" && (
              <>
                {form?.status === "pending" && (
                  <SubmitButton
                    isLoading={isLoading}
                    handleSubmit={approveOnOpen}
                    className="py-2 flex gap-2  w-auto px-8 border rounded-md bg-green font-semibold text-xs"
                  >
                    Approve Application
                  </SubmitButton>
                )}

                {form?.status === "pending" && (
                  <SubmitButton
                    isLoading={isLoading}
                    handleSubmit={declineOnOpen}
                    className="py-2 bg-red-500 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
                  >
                    Decline Application
                  </SubmitButton>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsDetails;
