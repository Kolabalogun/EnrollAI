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
import {
  createProviderApplication,
  getProviderRecentApplication,
} from "@/services/applications";
import { RootState } from "@/redux/store";
import { ApplicationFormInterface } from "@/lib/types";

const validateForm = (
  form: ApplicationFormInterface
): Record<string, string> => {
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
  const { user } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || null;
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!state || !JSON.parse(state)?.applicationName) {
      navigate(-1);
      return;
    }

    const updateFormm = async () => {
      try {
        const orgData = JSON.parse(state);
        const initialData = {
          ...form,
          applicationType: orgData?.applicationName || "",
          organizationApplicationId: orgData?._id || "",
          organizationId: orgData?.organization?._id || "",
          organizationName: orgData?.organization?.organizationName || "",
          applicationTitle: orgData?.applicationTitle || "",
        };

        if (user?.userId) {
          const res = await getProviderRecentApplication(user?.userId);

          console.log(res, "application");

          console.log(orgData, "orgData");

          const newData = res.success
            ? {
                ...form,
                ...res.data.application,
                applicationType: orgData?.applicationName || "",
                organizationId: orgData?.organization?._id || "",
                organizationApplicationId: orgData?._id || "",
                organizationName: orgData?.organization?.organizationName || "",
                applicationTitle: orgData?.applicationTitle || "",
              }
            : initialData;

          dispatch(updateForm(newData));
        } else {
          dispatch(updateForm(initialData));
        }
      } catch (error) {
        console.error("Error updating form:", error);
      }
    };

    updateFormm();
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
  console.log(form);
  const handleFileChange = (
    step: string,
    parentObject: string,
    fieldName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

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

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;

        console.log(base64);

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
          navigate(HEALTHCARE_APPLICATIONS);
        } else {
          const {
            updatedAt,
            _id,
            __v,
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

          console.warn(
            updatedAt,
            status,
            _id,
            __v,
            organizationApplication,
            createdAt,
            userId
          );

          if (!termsAndConditionsTwo || !termsAndConditionsOne) {
            return showToast(
              toast,
              "Enroll AI",
              "error",
              "Accept terms and conditions before you proceed"
            );
          }

          // Create a new FormData instance
          const formData = new FormData();

          // Append non-file fields
          formData.append("applicationType", data.applicationType);
          formData.append(
            "organizationApplicationId",
            data.organizationApplicationId
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
            const res = await createProviderApplication(formData);
            console.log(res, "Response from createProviderApplication");

            if (res.success) {
              onOpen();
              showToast(
                toast,
                "Enroll AI",
                "success",
                `${res?.data?.message || "Application created successfully"}`
              );
            } else {
              showToast(
                toast,
                "Enroll AI",
                "error",
                `${res?.message || "Failed to create Application"}`
              );
            }
          } catch (error: any) {
            console.log(error, "Error in createProviderApplication");
            showToast(
              toast,
              "Enroll AI",
              "error",
              `${error.message || "Failed to submit application"}`
            );
          }
        }
      } else {
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

        const validationErrors = validateForm(form as any);
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
      console.log(error, "Error in handleSubmit");
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to submit application"}`
      );
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
        <p
          onClick={() => dispatch(resetForm())}
          className="text-[11px] font-semibold text-fade"
        >
          Dashboard
        </p>
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
