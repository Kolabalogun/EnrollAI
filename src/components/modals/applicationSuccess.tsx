/* eslint-disable @typescript-eslint/no-explicit-any */
import { Check } from "@/assets/img";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "lucide-react";

const ApplicationSuccessModal = ({
  onClose,
  isOpen,

  handleClick,
}: {
  onClose: () => void;
  isOpen: boolean;

  handleClick: (e: any) => void;
}) => {
  return (
    // Chakra UI Modal component
    <Modal
      blockScrollOnMount={false}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent paddingLeft={0} paddingRight={0}>
        <ModalCloseButton />
        <ModalBody
          rounded={"xl"}
          paddingLeft={0}
          paddingRight={0}
          paddingBottom={10}
          paddingTop={10}
          className="flex bg-gradient-to-r from-[#e9f7f0] to-white space-x-4"
        >
          {/* Modal body containing a description */}

          <div className="flex  items-start  bg-gradient-to-r px-10 from-[#e9f7f0] to-white space-x-4">
            <div className=" flex bg-white rounded-full  p-1    ">
              <img src={Check} alt="" className="object-contain   w-16" />
            </div>
            <div className="space-y-4">
              <p className=" raleway font-bold text-base ">
                Application Received!
              </p>

              <p className="font-semibold text-[#353434] text-sm  raleway  ">
                Your application has been successfully completed. You will now
                wait for response from Health plan.
              </p>

              <div
                onClick={handleClick}
                className="flex cursor-pointer  gap-1   "
              >
                <p className=" raleway font-bold text-sm ">
                  View Application Details
                </p>
                <ChevronRightIcon size={18} />
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

// Export the ApplicationSuccessModal component
export default ApplicationSuccessModal;
