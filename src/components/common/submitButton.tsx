/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
  handleSubmit?: any;
}

const SubmitButton = ({
  isLoading,
  className,
  children,
  handleSubmit,
}: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      onClick={handleSubmit}
      className={className ?? "shad-primary-btn w-full"}
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
