import { CheckCircle } from "lucide-react";

const PointChecks = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="">
        <CheckCircle className="text-secondary" />
      </div>

      <div className="flex flex-col gap-2 ">
        <p className="font-semibold text-base raleway">{title}</p>
        <p className="text-sm text-fade raleway font-medium">{desc}</p>
      </div>
    </div>
  );
};

export default PointChecks;
