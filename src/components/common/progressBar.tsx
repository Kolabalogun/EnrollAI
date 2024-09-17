import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

type Props = {
  value: number;
  className: string;
  indicatorClassName?: string;
};

function ProgressBar({ value, className, indicatorClassName }: Props) {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 1500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Progress
      value={progress}
      indicatorClassName={indicatorClassName ?? ""}
      className={`h-1.5 rounded-full ${className}`}
    />
  );
}

export default ProgressBar;
