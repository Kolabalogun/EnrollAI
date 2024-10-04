/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChevronRight, ChevronRightIcon } from "lucide-react";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

import { SubmitButton } from "@/components/common";

import ApplicationSuccessModal from "@/components/modals/applicationSuccess";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HEALTHCARE_APPLICATIONS } from "@/router/routes";
import Step1 from "@/components/pages/applicationFormTemplates/step1";
import Step2 from "@/components/pages/applicationFormTemplates/step2";
import Step3 from "@/components/pages/applicationFormTemplates/step3";
import { CreateApplicationFormTemplateInitialState } from "@/constant/data/applicationsdata";

const CreateApplicationForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const navigate = useNavigate();

  const [form, setForm] = useState(CreateApplicationFormTemplateInitialState);
  const [pageNo, setPageNo] = useState(1);

  console.log(form);

  // Remove a field from a section
  const removeField = (section, field) => {
    setForm((prevForm) => {
      const updatedSection = { ...prevForm[section] };
      delete updatedSection[field];

      return {
        ...prevForm,
        [section]: updatedSection,
      };
    });
  };

  // Remove the entire section
  const removeSection = (section) => {
    const updatedform = { ...form };
    delete updatedform[section];
    setForm(updatedform);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      onOpen();
      navigate(HEALTHCARE_APPLICATIONS);
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
        handleClick={handleSubmit}
      />
      <div className="flex items-center gap-1">
        <p className="text-[11px] font-semibold text-fade">Dashboard</p>
        <ChevronRight className="text-[#667085]" size={15} />
        <p className="text-[11px] font-semibold text-[#667085]">Application</p>
      </div>

      <form onSubmit={handleSubmit}>
        {pageNo === 2 ? (
          <Step2 form={form} />
        ) : pageNo === 3 ? (
          <Step3 form={form} />
        ) : (
          <Step1
            form={form}
            removeField={removeField}
            removeSection={removeSection}
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
              {pageNo === 5 ? "Submit" : "Next"}
            </p>

            {pageNo !== 3 && <ChevronRightIcon size={15} />}
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default CreateApplicationForm;
