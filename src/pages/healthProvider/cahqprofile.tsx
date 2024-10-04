/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from "@/assets/img";
import { SubmitButton } from "@/components/common";
import SecondaryButton from "@/components/common/buttons/secondaryButton";
import ConfirmationModal from "@/components/modals/confirmationModal";
import Education from "@/components/pages/profile/education";
import License from "@/components/pages/profile/license";
import PersonalInformations from "@/components/pages/profile/personalInformations";
import PracticeLocation from "@/components/pages/profile/practicelocation";
import Reference from "@/components/pages/profile/reference";
import { updateCAHQForm } from "@/redux/features/caqhProfileFormSlice";
import { HEALTHCARE_APPLICATIONS_PROFILE } from "@/router/routes";
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
} from "@chakra-ui/react";
import {
  Badge,
  ChevronRightIcon,
  GraduationCap,
  IdCard,
  User2,
  Users,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
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
  const { form } = useSelector((state: any) => state.cahqProfile);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useSteps({
    index: form.pageNo || 1,
    count: steps.length,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateCAHQForm({ [name]: value }));
  };

  const handleDateChange = (fieldName: string, date: Date | null) => {
    dispatch(updateCAHQForm({ [fieldName]: date }));
  };

  const handlePhoneChange = (fieldName: string, phone: string) => {
    dispatch(updateCAHQForm({ [fieldName]: phone }));
  };

  const handleNextStep = (e: any) => {
    e.preventDefault();
    if (form.pageNo === 5) {
      onOpen();
    } else {
      setActiveStep(activeStep + 1);
      dispatch(updateCAHQForm({ pageNo: form.pageNo + 1 }));
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
          <p className="font-semibold text-3xl">CAHQ Profile</p>
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
          {form.pageNo === 5 ? (
            <Reference
              form={form}
              handleChange={handleChange}
              handlePhoneChange={handlePhoneChange}
            />
          ) : form.pageNo === 2 ? (
            <Education form={form} handleChange={handleChange} />
          ) : form.pageNo === 3 ? (
            <PracticeLocation form={form} handleChange={handleChange} />
          ) : form.pageNo === 4 ? (
            <License form={form} handleChange={handleChange} />
          ) : (
            <PersonalInformations
              form={form}
              handleChange={handleChange}
              handleDateChange={handleDateChange}
              handlePhoneChange={handlePhoneChange}
            />
          )}
        </div>

        <div className="flex   gap-5   items-center">
          <SecondaryButton
            title={form.pageNo === 1 ? "Cancel" : "Previous"}
            handleClick={() => {
              if (form.pageNo > 1) {
                setActiveStep(activeStep - 1);
                dispatch(updateCAHQForm({ pageNo: form.pageNo - 1 }));
              }
            }}
          />

          <SubmitButton
            // isLoading={isLoading}
            className="py-2 flex gap-2  w-auto px-8 border rounded-md font-semibold text-xs"
          >
            <p className="font-bold text-xs">
              {form.pageNo === 5 ? "Done" : "Next"}
            </p>
            {form.pageNo !== 5 && <ChevronRightIcon size={16} />}
          </SubmitButton>
        </div>
      </form>
    </section>
  );
};

export default CAHQProfile;
