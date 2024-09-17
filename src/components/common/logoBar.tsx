import { Link } from "react-router-dom";
import { Logo } from "@/assets/img";

const LogoBar = () => {
  return (
    <div className="bg-white py-5 px-6 rounded-md flex justify-between items-center shadow-sm">
      <Link to={"/"} className="flex items-center gap-1 ">
        <img src={Logo} alt="" className="h-10" />
        <p className=" font-medium text-base   text-secondary">Enroll Hub</p>
      </Link>

      <p className="raleway font-semibold cursor-pointer">Logout</p>
    </div>
  );
};

export default LogoBar;
