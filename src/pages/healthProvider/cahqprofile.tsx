/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from "@/assets/img";
import { SubmitButton } from "@/components/common";
import SecondaryButton from "@/components/common/buttons/secondaryButton";
import showToast from "@/components/common/showtoast";
import ConfirmationModal from "@/components/modals/confirmationModal";
import Education from "@/components/pages/profile/education";
import License from "@/components/pages/profile/license";
import PersonalInformations from "@/components/pages/profile/personalInformations";
import PracticeLocation from "@/components/pages/profile/practicelocation";
import Reference from "@/components/pages/profile/reference";
import { ApplicationFormInitialState } from "@/constant/data/applicationsdata";
import { RootState } from "@/redux/store";
import { HEALTHCARE_APPLICATIONS_PROFILE } from "@/router/routes";
import { getProviderRecentApplication } from "@/services/applications";
import {
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  useDisclosure,
  StepIcon,
  StepNumber,
  useToast,
} from "@chakra-ui/react";
import {
  Badge,
  ChevronRightIcon,
  GraduationCap,
  IdCard,
  User2,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Personal Information",
    icon: User2,
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
  },
  {
    title: "Practice Location",
    icon: Badge,
  },
  {
    title: "Licensure",
    icon: IdCard,
  },
  {
    title: "References",
    icon: Users,
  },
];

const CAHQProfile = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [data, setData] = useState<any>(ApplicationFormInitialState);
  const [pageNo, setPageNo] = useState(1);
  const toast = useToast();

  const fetchApplications = async () => {
    if (!user) return;
    console.log(user);

    try {
      const res = await getProviderRecentApplication(user?.userId);

      console.log(res);
      if (res.success) {
        setData(res?.data?.applications);
      } else {
        setData(ApplicationFormInitialState as any);
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to fetch Application"}`
      );
    }
  };
  useEffect(() => {
    if (user) fetchApplications();
  }, [user]);

  console.log(data, "dsdsds");
  const { isOpen, onClose, onOpen } = useDisclosure();

  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useSteps({
    // index: setPageNo || 1,
    count: steps.length,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    // dispatch(updateCAHQForm({ [name]: value }));
  };

  const handleDateChange = (fieldName: string, date: Date | null) => {
    console.log(fieldName, date);
  };

  const handlePhoneChange = (fieldName: string, phone: string) => {
    console.log(fieldName, phone);
    // dispatch(updateCAHQForm({ [fieldName]: phone }));
  };

  const handleNextStep = (e: any) => {
    e.preventDefault();
    if (pageNo === 5) {
      onOpen();
    } else {
      setActiveStep(activeStep + 1);
      setPageNo(pageNo + 1);
    }
  };

  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <ConfirmationModal
        onClose={onClose}
        isOpen={isOpen}
        message="Your information will not be stored on our data base. Once you click done, you won’t access CAQH data unless you verify again."
        title="Are you done verifying CAQH data?"
        onConfirm={() => navigate(HEALTHCARE_APPLICATIONS_PROFILE)}
      />

      <form
        onSubmit={handleNextStep}
        className="bg-white rounded-lg flex-1 h-full w-full flex flex-col px-5 py-5 pb-20 space-y-9"
      >
        <div className="space-y-1">
          <p className="font-semibold text-3xl">Application Profile</p>
          <p className="text-[12px] font-semibold  text-[#667085]">
            CAQH ID: 121212222
          </p>
        </div>
        <div className="">
          <img
            src={Avatar}
            className="h-20 lg:h-32 w-20 lg:w-32 rounded-full"
            alt="profile picture"
          />
        </div>
        <div className="">
          <div className="">
            <Stepper
              index={activeStep}
              colorScheme="purple"
              size={"sm"}
              height="100px"
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator border="none">
                    {step.icon ? (
                      <step.icon size={25} />
                    ) : (
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    )}
                  </StepIndicator>

                  <Box>
                    <StepTitle>
                      <p className="font-semibold text-[13px] lg:block hidden ">
                        {step.title}
                      </p>
                    </StepTitle>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
        <div className="space-y-5">
          {pageNo === 5 ? (
            <Reference
              form={data}
              handleChange={handleChange}
              handlePhoneChange={handlePhoneChange}
            />
          ) : pageNo === 2 ? (
            <Education form={data} handleChange={handleChange} />
          ) : pageNo === 3 ? (
            <PracticeLocation form={data} handleChange={handleChange} />
          ) : pageNo === 4 ? (
            <License form={data} handleChange={handleChange} />
          ) : (
            <PersonalInformations
              form={data}
              handleChange={handleChange}
              handleDateChange={handleDateChange}
              handlePhoneChange={handlePhoneChange}
            />
          )}
        </div>

        <div className="flex   gap-5   items-center">
          <SecondaryButton
            title={pageNo === 1 ? "Cancel" : "Previous"}
            handleClick={() => {
              if (pageNo > 1) {
                setActiveStep(activeStep - 1);
                // dispatch(updateCAHQForm({ pageNo: pageNo - 1 }));
              }
            }}
          />

          <SubmitButton
            // isLoading={isLoading}
            className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
          >
            <p className="font-bold text-xs">
              {pageNo === 5 ? "Done" : "Next"}
            </p>
            {pageNo !== 5 && <ChevronRightIcon size={16} />}
          </SubmitButton>
        </div>
      </form>
    </section>
  );
};

export default CAHQProfile;
