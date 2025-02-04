/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConfirmationModalProps {
  title?: string;
  message?: string;
  isOpen: boolean;
  onConfirm: any;
  onClose: () => void;
  isLoading?: boolean;
  buttonText?: string;
}

const ConfirmationModal = ({
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  isOpen,
  onConfirm,
  onClose,
  isLoading,
  buttonText = "Confirm",
}: ConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-200 ">
        <DialogHeader>
          <DialogTitle style={{ textAlign: "left" }} className="text-black">
            {title}
          </DialogTitle>
        </DialogHeader>

        <p className="text-black font-medium">{message}</p>
        <div className="flex justify-end">
          <Button
            disabled={isLoading}
            className={`${
              buttonText === "Delete" || buttonText === "Disable"
                ? "bg-red-500 hover:text-red-500 "
                : "bg-secondary hover:text-secondary "
            } text-white`}
            onClick={onConfirm}
          >
            {isLoading ? "Loading..." : buttonText}
          </Button>
          <Button className="text-black" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
