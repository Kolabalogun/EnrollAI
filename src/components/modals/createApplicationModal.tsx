/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  useToast,
  Divider,
  Select,
} from "@chakra-ui/react";

import { createApplicationOrg } from "@/services/org/applications";
import showToast from "../common/showtoast";
import { SubmitButton } from "../common";

const CreateApplicationModal = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const [applicationName, setApplicationName] = useState("");
  const [applicationTitle, setApplicationTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleCreateApplication = async () => {
    if (!applicationName.trim() || !applicationTitle.trim()) {
      showToast(
        toast,
        "Validation Error",
        "error",
        "Both fields are required."
      );
      return;
    }

    setIsLoading(true);
    const data = {
      applicationName,
      applicationTitle: applicationTitle.trim(),
    };
    try {
      const response = await createApplicationOrg(data);

      console.log(response);

      showToast(
        toast,
        "Enroll AI",
        "success",
        `${response?.message || "Application Created Successfully"}`
      );
      setApplicationName("");
      setApplicationTitle("");
      onClose();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      blockScrollOnMount={false}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size={"2xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <p className="font-semibold text-lg">Create New Application</p>
        </ModalHeader>
        <ModalCloseButton />

        <Divider />
        <ModalBody pb={10} pt={6}>
          <FormControl mb={4}>
            <FormLabel>
              <p className="font-semibold text-sm">Application Type</p>
            </FormLabel>
            <Select
              placeholder="Select application type"
              value={applicationName}
              onChange={(e) => setApplicationName(e.target.value)}
              _focus={{
                borderColor: "#b076e7",
              }}
              fontSize={14}
            >
              <option value="credentialing request">
                Credentialing Request
              </option>
              <option value="health plan">Health Plan</option>
              <option value="health insurance">Health Insurance</option>
              <option value="licensing">Licensing</option>
              <option value="credentialing">Credentialing</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>
              <p className="font-semibold text-sm">Application Title</p>
            </FormLabel>
            <Input
              _focus={{
                borderColor: "#b076e7",
              }}
              fontSize={14}
              placeholder="Enter application title"
              value={applicationTitle}
              onChange={(e) => setApplicationTitle(e.target.value)}
            />
          </FormControl>

          <div className="mt-8  ">
            <SubmitButton
              handleSubmit={handleCreateApplication}
              isLoading={isLoading}
              type="button"
              className=" py-5 px-10 rounded-lg w-full "
            >
              Create Application
            </SubmitButton>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateApplicationModal;
