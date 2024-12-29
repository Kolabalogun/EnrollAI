/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChevronRight, ChevronRightIcon } from "lucide-react";

import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import Step1 from "@/components/pages/applicationForm/step1";
import { SubmitButton } from "@/components/common";
import Step2 from "@/components/pages/applicationForm/step2";

import Step3 from "@/components/pages/applicationForm/step3";
import Review1 from "@/components/pages/applicationForm/reviews/review1";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, updateForm } from "@/redux/features/applicationFormSlice";
import Review2 from "@/components/pages/applicationForm/reviews/review2";
import ApplicationSuccessModal from "@/components/modals/applicationSuccess";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { HEALTHCARE_APPLICATIONS } from "@/router/routes";
import showToast from "@/components/common/showtoast";
import { createProviderApplication } from "@/services/applications";
import { RootState } from "@/redux/store";

const validateForm = (form: any): Record<string, string> => {
  const errors: Record<string, string> = {};

  // Helper function to check if a field is empty
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

const ApplicationForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [pageNo, setPageNo] = useState<number>(1);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { form } = useSelector((state: RootState) => state.applicationForm);

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || null;
  const [errors, setErrors] = useState({});

  console.log(form);

  console.log(errors);

  useEffect(() => {
    if (!state || (state && !JSON.parse(state)?.applicationName))
      return navigate(-1);
    if (state) {
      const orgData = JSON.parse(state);
      console.log(orgData);

      const data = {
        ...form,

        applicationType: orgData?.applicationName || "",
        organizationApplicationId: orgData?.organization?._id || "",
        organizationName: orgData?.organization?.organizationName || "",
        applicationTitle: orgData?.applicationTitle || "",
      };

      dispatch(updateForm(data));
    }
  }, [state]);

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
    dispatch(updateForm(data));
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
        dispatch(updateForm(data));
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
    dispatch(updateForm(data));
  };

  const handleCheckBoxChange = (fieldName: string, value: any) => {
    dispatch(updateForm({ [fieldName]: value }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (pageNo === 5) {
        if (isOpen) {
          dispatch(resetForm());

          navigate(HEALTHCARE_APPLICATIONS);
        } else {
          // Filter out problematic fields
          const {
            _id,
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
            _id,
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

          if (!termsAndConditionsTwo || !termsAndConditionsOne) {
            return showToast(
              toast,
              "Enroll AI",
              "error",
              "Accept terms and conditions before you proceed"
            );
          }

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
            const res = await createProviderApplication(cleanedFormData);
            console.log(res);

            if (res.success) {
              onOpen();
              showToast(
                toast,
                "Enroll AI",
                "error",
                `${res?.data?.message || "Application created successfully"}`
              );
            }
          } catch (error) {
            console.log(error);
          }
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

  return (
    <div className="space-y-5 remove-scrollbar">
      <ApplicationSuccessModal
        onClose={() => {
          onClose();
          dispatch(resetForm());

          navigate(HEALTHCARE_APPLICATIONS);
        }}
        isOpen={isOpen}
        handleClick={() => {
          dispatch(resetForm());

          navigate(HEALTHCARE_APPLICATIONS);
        }}
      />
      <div className="flex items-center gap-1">
        <p className="text-[11px] font-semibold text-fade">Dashboard</p>
        <ChevronRight className="text-[#667085]" size={15} />
        <p className="text-[11px] font-semibold text-[#667085]">Application</p>
      </div>

      <form onSubmit={handleSubmit}>
        {pageNo === 5 ? (
          <Review2 form={form} handleCheckBoxChange={handleCheckBoxChange} />
        ) : pageNo === 2 ? (
          <Step2
            form={form}
            errors={errors}
            handleResidencyChange={handleResidencyChange}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
          />
        ) : pageNo === 3 ? (
          <Step3
            form={form}
            errors={errors}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
          />
        ) : pageNo === 4 ? (
          <Review1 form={form} />
        ) : (
          <Step1 form={form} errors={errors} handleChange={handleChange} />
        )}

        <div className="flex justify-end gap-5 my-10 items-center">
          <button
            type="button"
            onClick={() => {
              if (pageNo > 1) {
                setPageNo(pageNo - 1);
              }
            }}
            className="py-2 raleway px-8 border rounded-md font-semibold text-xs"
          >
            {pageNo === 1 ? "Cancel" : pageNo === 4 ? "Edit" : "Back"}
          </button>

          <SubmitButton
            isLoading={isLoading}
            className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
          >
            <p className="font-bold text-xs">
              {pageNo === 3 ? "Review" : pageNo === 5 ? "Submit" : "Next"}
            </p>

            {pageNo !== 5 && <ChevronRightIcon size={15} />}
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
