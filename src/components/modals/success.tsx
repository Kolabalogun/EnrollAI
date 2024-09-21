import { Check } from "@/assets/img";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { SubmitButton } from "../common";

const SuccessModal = ({
  onClose,
  isOpen,
  title,
  desc,
  handleClick,
}: {
  onClose: () => void;
  isOpen: boolean;
  desc: string;
  title: string;
  handleClick: () => void;
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
      <ModalContent paddingLeft={10} paddingRight={10}>
        {/* Modal header displaying the title */}
        {/* <ModalHeader paddingLeft={0} paddingRight={0}>
          {title}
        </ModalHeader> */}
        {/* Close button for the modal */}
        {/* <ModalCloseButton /> */}
        <ModalBody
          paddingLeft={0}
          paddingRight={0}
          paddingBottom={10}
          paddingTop={10}
        >
          {/* Modal body containing a description */}

          <div className="flex flex-col space-y-10">
            <div className="flex items-center justify-center ">
              <img src={Check} alt="" className="h-16" />
            </div>
            <div className="space-y-4">
              <p className=" raleway font-semibold text-3xl text-center  ">
                {title}
              </p>

              <p className="font-semibold text-sm text-center raleway  ">
                {desc}
              </p>
            </div>

            <div
              onClick={handleClick}
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

// Export the SuccessModal component
export default SuccessModal;
