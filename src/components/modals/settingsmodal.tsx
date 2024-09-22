/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitButton } from "@/components/common";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";

type Props = {
  isLoading: boolean;
  onSubmit: any;
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
  buttonText: string;
  desc: string;
};

const SecurityModal = ({
  isLoading,
  onSubmit,
  dialogOpen,
  setDialogOpen,
  title,
  children,
  buttonText,
  desc,
}: Props) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-md bg-white">
        <div className="flex items-center justify-center   ">
          <form
            onSubmit={onSubmit}
            className="  px-3 py-4 rounded-lg   max-w-sm w-full"
          >
            <div className="flex justify-center items-center mb-3">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <p className="text-gray-500 font-medium  text-center text-[13px] mb-3">
              {desc}
            </p>

            <div className="h-[1px] w-full bg-fade mt-6 mb-6 " />

            {children}
          </form>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <SubmitButton isLoading={isLoading} handleSubmit={onSubmit}>
              {buttonText}
            </SubmitButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SecurityModal;
