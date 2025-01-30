/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { SubmitButton } from "@/components/common";
import showToast from "@/components/common/showtoast";

import ConfirmationModal from "@/components/modals/confirmationModal";
import PersonalInformations from "@/components/pages/applicationForm/step1/personalInformations";

import { ApplicationFormInitialState } from "@/constant/data/applicationsdata";

import { RootState } from "@/redux/store";
import { HEALTHCARE_APPLICATIONS_CAHQPROFILE } from "@/router/routes";
import { getProviderRecentApplication } from "@/services/applications";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [data, setData] = useState<any>(ApplicationFormInitialState);

  const [dataState, setDataState] = useState<boolean>(true);
  console.log(data);
  const fetchApplications = async () => {
    if (!user) return;

    try {
      const res = await getProviderRecentApplication(user?.userId);

      console.log(res);
      if (res.data?.application) {
        setData(res?.data?.application);
        setDataState(true);
      } else {
        setData(ApplicationFormInitialState as any);
        setDataState(false);
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to fetch details"}`
      );
    }
  };
  useEffect(() => {
    if (user) fetchApplications();
  }, [user]);

  const handleSubmit = async () => {
    if (dataState) {
      navigate(HEALTHCARE_APPLICATIONS_CAHQPROFILE);
    } else {
      showToast(
        toast,
        "Enroll AI",
        "info",
        `Your Profile contains your most recent application. You need to have filled or sent an application to a Credentializing Organization for your data to be verified.`
      );
    }
  };

  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <ConfirmationModal
        onClose={onClose}
        isOpen={isOpen}
        onConfirm={handleSubmit}
      />
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-3xl">Profile</p>
      </div>

      <div className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-3 md:p-5 space-y-16">
        <div className="space-y-1">
          <p className="font-semibold text-base ">CAQH Credentialing</p>
          <p className="text-[12px] font-medium text-[#667085]">
            CAQH ID: {data?.step1?.personalInformation?.cahqID}
          </p>
        </div>
        <div className="space-y-5">
          <PersonalInformations form={data} />
          {/* <ProfessionalID form={form} /> */}
        </div>

        <div className="py-5 space-y-2 ">
          <p className="font-semibold raleway text-[12px] text-[#667085] ">
            Click to verify your CAHQ Data
          </p>

          <SubmitButton
            type="button"
            handleSubmit={() => {
              onOpen();
            }}
            className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
          >
            Verify Data
          </SubmitButton>
        </div>
      </div>
    </section>
  );
};

export default Profile;
