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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (pageNo === 3) {
        if (isOpen) {
          // Filter out problematic fields
          const {
            status,
            organizationApplication,
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

          // Log for debugging
          console.log(
            status,
            termsAndConditionsOne,
            termsAndConditionsTwo,
            organizationApplication,
            createdAt,
            userId,
            medicaidCertificate,
            ECFMGFile,
            controlledSubstanceExpirationFile,
            deaExpirationFile,
            stateMedicalLicensefile1,
            stateMedicalLicensefile2,
            stateMedicalLicensefile3,
            certificationfile1,
            certificationfile2,
            certificationfile3
          );

          // Construct the new form data without the problematic fields
          const cleanedFormData = {
            ...data,
            step2: {
              ...restStep2,
              medicalLicenses: medicalLicensesRest,
              otherMedLicenses: otherMedLicensesRest,
            },
            step3: {
              ...step3Rest,
              boards: boardRest,
            },
          };

          try {
            const res = await updateProviderApplication(cleanedFormData);
            console.log(res, "resresresres");
            getApplication();
            if (res.success) {
              onOpen();
              showToast(
                toast,
                "Enroll AI",
                "success",
                `${res?.data?.message || "Application created successfully"}`
              );
            }
          } catch (error) {
            console.log(error);
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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (
    step: string,
    parentObject: string,
    fieldName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;

        const data = {
          ...form,
          [step]: {
            ...form[step],
            [parentObject]: {
              ...form[step][parentObject],
              [fieldName]: base64,
            },
          },
        };
        setForm(data);
      };
      reader.readAsDataURL(file);
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

  if (isLoadingPage)
    return (
      <div className="h-[80vh] bg-white/10 space-y-1  flex-col flex items-center justify-center ">
        <Spinner color="purple" />
        <p className="font-semibold">Loading Application Details...</p>
      </div>
    );

  return (
    <section className="space-y-5 remove-scrollbar flex mb-20 flex-col">
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
            <p className="font-semibold text-base ">
              {form?.applicationType || "N/A"}
            </p>
            <p className="text-[12px] font-medium text-[#667085]">
              {form?.organizationApplication?.organizationName ||
                form?.organizationName ||
                "N/A"}
            </p>
          </div>
          <p className="text-[12px] font-medium text-[#667085]">
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

                <SubmitButton
                  isLoading={isLoading}
                  className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
                >
                  <p className="font-bold text-xs">
                    {pageNo === 3 ? "Update Application" : "Next"}
                  </p>

                  {pageNo !== 3 && <ChevronRightIcon size={15} />}
                </SubmitButton>
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
                    : "border-[#21A0A0] text-[#21A0A0]"
                } border `}
              >
                {form?.status}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 lg:items-center py-10">
            <SecondaryButton
              title={"Delete Application"}
              handleClick={() => {
                deleteOnOpen();
              }}
            />

            <SubmitButton
              // isLoading={isLoading}
              className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
            >
              Send Message
            </SubmitButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsDetails;
