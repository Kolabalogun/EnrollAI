import { SubmitButton } from "@/components/common";
import ExploreKeyFeatures from "@/components/pages/getstarted/keyfeatures";
import LoginCAHQModal from "@/components/pages/getstarted/keyfeatures/LoginCAHQModal";
import { GetStartedLayout } from "@/layout";
import { DASHBOARD_ROUTE } from "@/router/routes";

import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const steps = [
  {
    title: "Explore Key Features",
    description: "Maximize Efficiency with AI Automation",
  },
  {
    title: "Connect You CAQH ProView Account",
    description: "Seamless Integration for Accurate Application Filling",
  },
  {
    title: "Securely Authenticate",
    description: "Linking Your Account Safely and Easily",
  },
  {
    title: "You’re All Set!",
    description: "Get Ready to Simplify Your Application Process",
  },
];

const Keyfeatures = () => {
  const navigate = useNavigate();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [tab, setTab] = useState<number>(0);

  const { activeStep, setActiveStep } = useSteps({
    index: tab,
    count: steps.length,
  });

  const handleNextStep = () => {
    if (tab === 3) {
      navigate(DASHBOARD_ROUTE);
    }
    if (tab === 2) {
      onOpen();
    } else {
      setTab(tab + 1);
      setActiveStep(tab + 1);
    }
  };

  return (
    <GetStartedLayout others>
      <LoginCAHQModal
        onClose={onClose}
        isOpen={isOpen}
        setTab={setTab}
        setActiveStep={setActiveStep}
      />
      <div className="flex  ">
        <div className="flex flex-col flex-1  items-center ">
          <section className="mb-16 mt-10  flex flex-col  text-center raleway space-y-4">
            <h1 className="header  ">
              {tab === 1
                ? "Connect Your CAQH ProView Account"
                : tab === 2
                ? "Securely Authenticate"
                : tab === 3
                ? "You’re All Set!"
                : "Explore Key Features"}
            </h1>
            <p
              className="text-fade  font-medium text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  tab === 1
                    ? "Seamless Integration For Application Filling"
                    : tab === 2
                    ? "Linking Your Account Safely and Easily"
                    : tab === 3
                    ? "Get Ready To Simplify Your Application Process"
                    : "Maximize Efficiency with AI Automation for Application Filling",
              }}
            ></p>
          </section>

          <ExploreKeyFeatures tab={tab} />

          <section className="flex mt-20 flex-col gap-9">
            <div onClick={handleNextStep}>
              <SubmitButton
                type="button"
                className=" py-5 px-10 rounded-lg w-auto "
              >
                {tab === 2
                  ? "Link CAQH ProView Account"
                  : tab === 3
                  ? "Go to Dashboard"
                  : "Continue"}
              </SubmitButton>
            </div>

            {tab && tab !== 3 ? (
              <div
                onClick={() => {
                  setTab(tab - 1);
                  setActiveStep(tab - 1);
                }}
              >
                <p className="text-secondary cursor-pointer font-semibold text-center raleway">
                  Back
                </p>
              </div>
            ) : (
              ""
            )}
          </section>
        </div>
        <section className="w-80 p-8 raleway bg-white min-h-[80vh]">
          <div className="mb-24">
            <Stepper
              index={activeStep}
              colorScheme="purple"
              orientation="vertical"
              size={"sm"}
              height="400px"
              gap="0"
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box>
                    <StepTitle
                      style={{
                        fontWeight: 600,
                        fontSize: 13,
                        fontFamily: "raleway",
                      }}
                    >
                      {step.title}
                    </StepTitle>
                    <StepDescription
                      style={{
                        fontWeight: 500,
                        fontSize: 12,
                        fontFamily: "raleway",
                      }}
                    >
                      {step.description}
                    </StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </div>

          <div className="mb-10">
            <p className="font-semibold   text-xs">Having troubles?</p>

            <p className="text-xs text-fade font-medium mt-4">
              Feel free to contact us and we will always help you through the
              process.
            </p>

            <button className="border border-fade py-1.5 px-3 text-xs font-semibold rounded-lg mt-8 raleway">
              Help Center
            </button>
          </div>
        </section>
      </div>
    </GetStartedLayout>
  );
};

export default Keyfeatures;
