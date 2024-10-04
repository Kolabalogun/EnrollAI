/* eslint-disable @typescript-eslint/no-explicit-any */
import { Check, Frame5, Frame6 } from "@/assets/img";
import { SubmitButton } from "@/components/common";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";

const LoginCAHQModal = ({
  onClose,
  isOpen,
  setTab,
  setActiveStep,
}: {
  onClose: () => void;
  isOpen: boolean;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [showSucessModal, setShowSucessModal] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setShowSucessModal(true);
  };

  const handleProceed = () => {
    onClose();
    setTab(3);
    setActiveStep(3);
  };
  return (
    <Modal onClose={onClose} size={"6xl"} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody padding={0}>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="bg-[#ececec] pt-12 px-6 pb-6 lg:p-10 flex flex-col xl:flex-row items-center justify-center gap-5">
                <div className="">
                  <img src={Frame5} alt="" className="h-32 w-full" />
                </div>
                <div className="">
                  <img src={Frame6} alt="" className="h-32 w-full" />
                </div>
              </div>
            </div>

            {showSucessModal ? (
              <div className="flex flex-col py-24 space-y-14">
                <div className="flex items-center justify-center ">
                  <img src={Check} alt="" className="h-16" />
                </div>
                <div className="space-y-4">
                  <p className=" raleway font-semibold  text-4xl text-center  ">
                    Account Linked Successfully
                  </p>

                  <p className="font-semibold text-sm px-5 lg:px-1 text-center raleway  ">
                    Your CAQH ProView account is now linked and ready to use.
                  </p>
                </div>

                <div
                  onClick={handleProceed}
                  className="flex items-center justify-center "
                >
                  <SubmitButton
                    type="button"
                    className=" py-5 px-10 rounded-lg w-auto "
                  >
                    Continue
                  </SubmitButton>
                </div>
              </div>
            ) : (
              <div className="bg-white space-y-10 p-6 lg:p-10 xl:p-20">
                <div className="">
                  <p className="font-semibold  raleway">
                    Welcome! Enroll Hub has teamed up with trusted healthcare
                    technology provider CAQH Solutions to make it easier for all
                    U.S. Health Providers to submit professional application and
                    practice credentials to any Health Plan or Credentialing
                    Organization in the CAQH network. Applicable information
                    will be automatically Pre-filled using verified data from
                    your CAQH ProView Profile, saving your time and making the
                    Application process faster.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="font-semibold text-lg">Login</p>

                  <p className="font-semibold text-sm">
                    The page you have requested requires user authentication.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <p className="font-semibold text-lg">CAQH User ID</p>

                    <input
                      type="text"
                      className="border border-fade2 outline-none px-3 plus-jakarta text-[13px] rounded-lg py-3 w-full"
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-lg">Password</p>

                    <input
                      type="text"
                      className="border border-fade2 outline-none px-3 plus-jakarta text-[13px] rounded-lg py-3 w-full"
                    />
                  </div>
                  <p className="font-semibold text-sm">
                    Login to grant permission for our app to securely access
                    your CAQH data.
                  </p>

                  <SubmitButton className=" py-5 px-10 rounded-lg w-auto ">
                    Login
                  </SubmitButton>
                </div>
              </div>
            )}
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginCAHQModal;
