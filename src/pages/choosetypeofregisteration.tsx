/* eslint-disable @typescript-eslint/no-explicit-any */
import { Logo } from "@/assets/img";
import { SubmitButton } from "@/components/common";

import { LOGIN_ROUTE } from "@/router/routes";
import { Briefcase, SquarePen } from "lucide-react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const ChooseTypeOfRegisteration = () => {
  const navigate = useNavigate();

  const isLoading = false;

  const [state, setState] = useState<any>(null);

  const onSubmit = async (e: any) => {
    e.preventDefault();
  };
  return (
    <main className="min-h-screen bg-primary   px-5   py-5">
      <div className="bg-white py-5 px-4 rounded-md shadow-sm">
        <Link to={"/"} className="flex items-center gap-1 ">
          <img src={Logo} alt="" className="h-10" />
          <p className=" font-medium text-base   text-secondary">Enroll Hub</p>
        </Link>
      </div>

      <div className="h-[85vh] flex items-center  flex-col w-full  justify-center ">
        <div className="flex   items-center flex-col  ">
          <section className="mb-8 w-96  text-center raleway space-y-4">
            <h1 className="header text-center w-full  ">Create an Account</h1>
            <p
              className="text-text-primary text-center text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  "Lorem Ipsum Set dolor is a dummy text for place holders",
              }}
            ></p>
          </section>
          <form onSubmit={onSubmit} className="space-y-5 raleway flex-1">
            <div
              onClick={() => setState(1)}
              className={`rounded-xl p-6 cursor-pointer flex border-2 border-fade2 flex-col  space-y-6 ${
                state === 1 && "bg-fadesecondary"
              } `}
            >
              <div className="">
                <SquarePen
                  className={`${state === 1 ? "text-secondary" : "text-teal"} `}
                />
              </div>

              <div className="flex justify-between gap-5">
                <div className="space-y-4">
                  <h1 className="header">I am a Provider</h1>
                  <p className="raleway">
                    Lorem Ipsum set dolor is a dummy text for place holders.
                  </p>
                </div>

                <div onClick={() => setState(1)} className="cursor-pointer">
                  <div
                    className={`p-1 rounded-full ${
                      state === 1 ? "border-secondary  " : "border-fade2"
                    }  border-2 `}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        state === 1
                          ? "border-secondary bg-secondary"
                          : "border-none"
                      } border-2 `}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setState(2)}
              className={`rounded-xl p-6 cursor-pointer flex border-2 border-fade2 flex-col  space-y-6 ${
                state === 2 && "bg-fadesecondary"
              } `}
            >
              <div className="">
                <Briefcase
                  className={`${state === 2 ? "text-secondary" : "text-teal"} `}
                />
              </div>

              <div className="flex justify-between gap-5">
                <div className="space-y-4">
                  <h1 className="header">Credentialing Organization</h1>
                  <p className="raleway">
                    Lorem Ipsum set dolor is a dummy text for place holders.
                  </p>
                </div>

                <div onClick={() => setState(1)} className="cursor-pointer">
                  <div
                    className={`p-1 rounded-full ${
                      state === 2 ? "border-secondary" : "border-fade2"
                    }  border-2 `}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        state === 2
                          ? "border-secondary bg-secondary"
                          : "border-none"
                      } border-2 `}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <SubmitButton
              className="bg-secondary hover:text-secondary border-[##b076e7] border-2 py-6 rounded-xl raleway text-[13px] font-semibold text-white w-full "
              isLoading={isLoading}
            >
              Continue
            </SubmitButton>

            <div className="flex text-center w-full items-center">
              <p className="text-sm text-center w-full plus-jakarta my-1">
                Already have an account?{" "}
                <span
                  onClick={() => navigate(LOGIN_ROUTE)}
                  className="text-tertiary font-medium text-sm cursor-pointer"
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ChooseTypeOfRegisteration;
