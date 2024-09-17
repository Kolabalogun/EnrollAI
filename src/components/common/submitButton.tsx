/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
  handleSubmit?: any;
  type?: "submit" | "reset" | "button";
}

const SubmitButton = ({
  isLoading,
  className,
  children,
  handleSubmit,
  type,
}: ButtonProps) => {
  return (
    <Button
      type={type ?? "submit"}
      disabled={isLoading}
      onClick={handleSubmit}
      className={`         
        bg-secondary hover:text-secondary border-[##b076e7] border-2  py-6 rounded-xl  raleway text-[13px] font-semibold transition duration-500 text-white w-full  ${className}`}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
