/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
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
}

const ConfirmationModal = ({
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  isOpen,
  onConfirm,
  onClose,
  isLoading,
}: ConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-200 ">
        <DialogHeader>
          <DialogTitle className="text-black">{title}</DialogTitle>
        </DialogHeader>
        <p className="text-black font-medium">{message}</p>
        <DialogFooter>
          <Button
            disabled={isLoading}
            className="bg-secondary hover:text-secondary  text-white"
            onClick={onConfirm}
          >
            {isLoading ? "Loading..." : "Confirm"}
          </Button>
          <Button className="text-black" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
