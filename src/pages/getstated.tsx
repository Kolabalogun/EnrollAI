import { Frame1, Frame2, GetStartedImg, Frame3, Frame4 } from "@/assets/img";
import { SubmitButton } from "@/components/common";
import { GetStartedLayout } from "@/layout";
import { KEY_FEATURES } from "@/router/routes";
import { useNavigate } from "react-router-dom";

const GetStated = () => {
  const navigate = useNavigate();
  return (
    <GetStartedLayout>
      <section className="mb-20 mt-10   text-center raleway space-y-4">
        <h1 className="header  ">Welcome to Enroll Hub</h1>
        <p
          className="text-fade italic text-sm"
          dangerouslySetInnerHTML={{
            __html:
              "Your AI-Powered Assistant for Effortless Application Management",
          }}
        ></p>
      </section>

      <section className="relative">
        <div className="relative xl:w-[800px]">
          <img src={GetStartedImg} alt="" className="w-full h-full" />

          <div className="absolute  -top-14 -right-32 h-52 ">
            <img src={Frame1} alt="" className="h-full w-full" />
          </div>

          <div className="absolute -bottom-32 -right-32 h-52 ">
            <img src={Frame2} alt="" className="h-full w-full" />
          </div>

          <div className="absolute top-32 -left-56 h-52 ">
            <img src={Frame4} alt="" className="h-full w-full" />
          </div>
          <div className="absolute -bottom-32 -left-56 h-52 ">
            <img src={Frame3} alt="" className="h-full w-full" />
          </div>
        </div>

        <div className="space-y-5 mt-28 mb-20 flex flex-col justify-center items-center">
          <p className="raleway font-semibold">
            Let’s get started with a few easy steps:
          </p>
          <div className="" onClick={() => navigate(KEY_FEATURES)}>
            <SubmitButton
              type="button"
              className=" py-5 px-10 rounded-lg w-auto "
            >
              Get Started
            </SubmitButton>
          </div>
        </div>
      </section>
    </GetStartedLayout>
  );
};

export default GetStated;
