/* eslint-disable @typescript-eslint/no-explicit-any */
import { HEALTHCARE_APPLICATIONS } from "@/router/routes";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import PersonalInformations from "@/components/pages/applicationForm/step1/personalInformations";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationFormType } from "@/lib/types/tables";
import { ApplicationFormInitialState } from "@/constant/data/applicationsdata";
import ProfessionalID from "@/components/pages/applicationForm/step1/professionalID";
import {
  setApplicationList,
  updateForm,
} from "@/redux/features/applicationFormSlice";
import { SubmitButton } from "@/components/common";
import SecondaryButton from "@/components/common/buttons/secondaryButton";

const ApplicationsDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { lists } = useSelector((state: any) => state.applicationForm);
  const [form, setForm] = useState(ApplicationFormInitialState);
  const [disableForm, setDisableForm] = useState(true);

  console.log(setForm);

  // useEffect(() => {
  //   const filteredForm = lists.find(
  //     (list: ApplicationFormType) => list.id === id
  //   );

  //   setForm(filteredForm);
  // }, [id]);

  const deleleForm = (id: string) => {
    const filteredForm = lists.filter(
      (list: ApplicationFormType) => list.id !== id
    );

    dispatch(setApplicationList(filteredForm));
    navigate(HEALTHCARE_APPLICATIONS);
  };

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

  return (
    <section className="space-y-5 remove-scrollbar flex mb-20 flex-col">
      <div className="flex flex-col gap-4">
        <div onClick={() => navigate(-1)} className="flex gap-3 items-center">
          <ChevronLeft size={15} />
          <p className="font-semibold cursor-pointer text-xs">Go back</p>
        </div>
        <p className="font-semibold text-3xl">Applications</p>
      </div>

      <div className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-3 md:p-5 space-y-10">
        <div className="space-y-5">
          <div className="space-y-1">
            <p className="font-semibold text-base ">Health Plan</p>
            <p className="text-[12px] font-medium text-[#667085]">
              Lorem Ipsum Organization
            </p>
          </div>
          <p className="text-[12px] font-medium text-[#667085]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            officia atque placeat illo maxime voluptates vitae ab est
            reprehenderit corporis expedita explicabo similique quos deleniti
            incidunt, odio dignissimos. Aspernatur quisquam assumenda asperiores
            laudantium esse libero laboriosam fugit modi vitae voluptate nulla,
            numquam odio corrupti dolorum atque repellat debitis, praesentium
            autem?
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="font-semibold text-base ">CAQH Credentialing</p>
            <p className="text-[12px] font-medium text-[#667085]">
              Lorem Ipsum Organization
            </p>
          </div>

          <PersonalInformations
            form={form}
            disableForm={disableForm}
            handleChange={handleChange}
            handlePhoneChange={handlePhoneChange}
            handleDateChange={handleDateChange}
          />

          <ProfessionalID
            disableForm={disableForm}
            form={form}
            handleChange={handleChange}
          />

          <div className="flex flex-col space-y-4 border-b-2   py-10  ">
            <div className="flex gap-5 items-center">
              <p className="text-[#000] text-lg    font-semibold ">
                Application Status:
              </p>
              <div className="text-xs   items-center justify-center flex gap-2 font-medium p-0.5 rounded-full  w-32 border-[#21A0A0] text-[#21A0A0] border bg-[#d3ecec]">
                {form?.status || "Under Review"}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 lg:items-center py-10">
            <SecondaryButton
              title={"Edit Application"}
              handleClick={() => {
                setDisableForm(!disableForm);
              }}
            />

            <SecondaryButton
              title={"Cancel Application"}
              handleClick={() => {
                deleleForm(form._id);
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
