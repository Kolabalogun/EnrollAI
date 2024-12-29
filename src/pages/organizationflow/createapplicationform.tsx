/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChevronRight, ChevronRightIcon } from "lucide-react";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

import { SubmitButton } from "@/components/common";

import ApplicationSuccessModal from "@/components/modals/applicationSuccess";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Step1 from "@/components/pages/applicationFormTemplates/step1";
import Step2 from "@/components/pages/applicationFormTemplates/step2";
import Step3 from "@/components/pages/applicationFormTemplates/step3";
import { ApplicationFormInitialState } from "@/constant/data/applicationsdata";

const CreateApplicationForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const navigate = useNavigate();

  // Use the correct type for form state
  const [form, setForm] = useState<any>(ApplicationFormInitialState);
  const [pageNo, setPageNo] = useState(1);

  console.log(form);

  // Remove a field from a section
  const removeField = (section: keyof any, field: string) => {
    setForm((prevForm: any) => {
      const updatedSection = { ...prevForm[section] };
      delete updatedSection[field];

      return {
        ...prevForm,
        [section]: updatedSection,
      };
    });
  };

  // Remove a field from a subsection
  const removeSubField = (
    section: keyof any,
    subsection: string,
    field: string
  ) => {
    setForm((prevForm: any) => {
      // Copy the section object
      const updatedSection = { ...prevForm[section] };

      // Copy the subsection object
      const updatedSubsection = { ...updatedSection[subsection] };

      // Delete the field from the subsection
      delete updatedSubsection[field];

      // If the subsection is now empty, delete the entire subsection
      if (Object.keys(updatedSubsection).length === 0) {
        delete updatedSection[subsection];
      } else {
        // Otherwise, update the section with the modified subsection
        updatedSection[subsection] = updatedSubsection;
      }

      // Return the updated form with the modified section
      return {
        ...prevForm,
        [section]: updatedSection,
      };
    });
  };

  // Remove the entire section
  const removeSection = (section: keyof any) => {
    setForm((prevForm: any) => {
      const updatedForm = { ...prevForm };
      delete updatedForm[section];
      return updatedForm;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setPageNo((prevPageNo) => prevPageNo + 1);

      if (pageNo === 3) {
        onOpen();
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
        onClose={onClose}
        isOpen={isOpen}
        handleClick={() => navigate("/dashboard")}
      />
      <div className="flex items-center gap-1">
        <p className="text-[11px] font-semibold text-fade">Dashboard</p>
        <ChevronRight className="text-[#667085]" size={15} />
        <p className="text-[11px] font-semibold text-[#667085]">Application</p>
      </div>

      <form onSubmit={handleSubmit}>
        {pageNo === 2 ? (
          <Step2
            form={form}
            removeField={removeField}
            removeSection={removeSection}
            removeSubField={removeSubField}
          />
        ) : pageNo === 3 ? (
          <Step3
            form={form}
            removeField={removeField}
            removeSection={removeSection}
            removeSubField={removeSubField}
          />
        ) : (
          <Step1
            form={form}
            removeField={removeField}
            removeSection={removeSection}
            removeSubField={removeSubField}
          />
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
            {pageNo === 1 ? "Cancel" : "Back"}
          </button>

          <SubmitButton
            isLoading={isLoading}
            className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
          >
            <p className="font-bold text-xs">
              {pageNo === 3 ? "Submit" : "Next"}
            </p>

            {pageNo !== 3 && <ChevronRightIcon size={15} />}
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default CreateApplicationForm;
