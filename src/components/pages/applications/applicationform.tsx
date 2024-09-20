/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChevronRight, ChevronRightIcon } from "lucide-react";

import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Step1 from "@/components/pages/applicationForm/step1";
import { SubmitButton } from "@/components/common";
import Step2 from "@/components/pages/applicationForm/step2";

import Step3 from "@/components/pages/applicationForm/step3";
import Review1 from "@/components/pages/applicationForm/reviews/review1";
import { useDispatch, useSelector } from "react-redux";
import {
  setApplicationList,
  updateForm,
} from "@/redux/features/applicationForm/applicationFormSlice";
import Review2 from "@/components/pages/applicationForm/reviews/review2";
import ApplicationSuccessModal from "@/components/modal/applicationSuccess";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HEALTH_DASHBOARD_ROUTE } from "@/router/routes";

const ApplicationForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { form, lists } = useSelector((state: any) => state.applicationForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(form);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  const handleDateChange = (fieldName: string, date: Date | null) => {
    dispatch(updateForm({ [fieldName]: date }));
  };

  const handlePhoneChange = (fieldName: string, phone: string) => {
    dispatch(updateForm({ [fieldName]: phone }));
  };

  const handleCheckBoxChange = (fieldName: string, value: any) => {
    dispatch(updateForm({ [fieldName]: value }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      console.log(form);

      if (form.pageNo === 5) {
        if (isOpen) {
          dispatch(setApplicationList([...lists, form]));
          navigate(HEALTH_DASHBOARD_ROUTE);
        } else {
          onOpen();
        }
      } else {
        dispatch(updateForm({ pageNo: form.pageNo + 1 }));
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
        handleClick={handleSubmit}
      />
      <div className="flex items-center gap-1">
        <p className="text-[11px] font-semibold text-fade">Dashboard</p>
        <ChevronRight className="text-[#667085]" size={15} />
        <p className="text-[11px] font-semibold text-[#667085]">Application</p>
      </div>

      <form onSubmit={handleSubmit}>
        {form.pageNo === 1 ? (
          <Step1
            form={form}
            handleChange={handleChange}
            handlePhoneChange={handlePhoneChange}
            handleDateChange={handleDateChange}
          />
        ) : form.pageNo === 2 ? (
          <Step2
            form={form}
            handleChange={handleChange}
            handlePhoneChange={handlePhoneChange}
            handleDateChange={handleDateChange}
          />
        ) : form.pageNo === 3 ? (
          <Step3
            form={form}
            handleChange={handleChange}
            handleDateChange={handleDateChange}
          />
        ) : form.pageNo === 3 ? (
          <Review1 form={form} />
        ) : (
          <Review2 form={form} handleCheckBoxChange={handleCheckBoxChange} />
        )}

        <div className="flex justify-end gap-5 my-10 items-center">
          <button
            type="button"
            onClick={() => {
              if (form.pageNo > 1) {
                dispatch(updateForm({ pageNo: form.pageNo - 1 }));
              }
            }}
            className="py-2 raleway px-8 border rounded-md font-semibold text-xs"
          >
            {form.pageNo === 1 ? "Cancel" : form.pageNo === 4 ? "Edit" : "Back"}
          </button>

          <SubmitButton
            isLoading={isLoading}
            className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
          >
            <p className="font-bold text-xs">
              {form.pageNo === 3
                ? "Review"
                : form.pageNo === 5
                ? "Submit"
                : "Next"}
            </p>

            {form.pageNo !== 5 && <ChevronRightIcon size={15} />}
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
