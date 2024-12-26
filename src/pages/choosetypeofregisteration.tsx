/* eslint-disable @typescript-eslint/no-explicit-any */

import { SubmitButton } from "@/components/common";
import LogoBar from "@/components/common/logoBar";
import { setAccountType } from "@/redux/features/authSlice";
import {
  LOGIN_ROUTE,
  ORGANIZATION_REGISTER_ROUTE,
  REGISTER_ROUTE,
} from "@/router/routes";
import { Briefcase, SquarePen } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChooseTypeOfRegisteration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = false;

  const [state, setState] = useState<string>("provider");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(setAccountType(state));

    if (state === "provider") {
      navigate(REGISTER_ROUTE);
    } else {
      navigate(ORGANIZATION_REGISTER_ROUTE);
    }
  };
  return (
    <main className="min-h-screen bg-primary   px-3 lg:px-5   py-5">
      <LogoBar />

      <div className="min-h-[85vh] my-20 lg:my-0 flex items-center  flex-col w-full  justify-center ">
        <div className="flex   items-center flex-col  ">
          <section className="mb-8 lg:w-96  text-center raleway space-y-4">
            <h1 className="header text-center w-full  ">Create an Account</h1>
            <p
              className="text-fade text-center text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  "Lorem Ipsum Set dolor is a dummy text for place holders",
              }}
            ></p>
          </section>
          <form onSubmit={onSubmit} className="space-y-5 raleway flex-1">
            <div
              onClick={() => setState("provider")}
              className={`rounded-xl p-6 cursor-pointer flex border-2 border-fade2 flex-col  space-y-6 ${
                state === "provider" && "bg-fadesecondary"
              } `}
            >
              <div className="">
                <SquarePen
                  className={`${
                    state === "provider" ? "text-secondary" : "text-teal"
                  } `}
                />
              </div>

              <div className="flex justify-between gap-5">
                <div className="space-y-4">
                  <h1 className="header">I am a Provider</h1>
                  <p className="raleway">
                    Lorem Ipsum set dolor is a dummy text for place holders.
                  </p>
                </div>

                <div
                  onClick={() => setState("provider")}
                  className="cursor-pointer"
                >
                  <div
                    className={`p-1 rounded-full ${
                      state === "provider"
                        ? "border-secondary  "
                        : "border-fade2"
                    }  border-2 `}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        state === "provider"
                          ? "border-secondary bg-secondary"
                          : "border-none"
                      } border-2 `}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setState("organization")}
              className={`rounded-xl p-6 cursor-pointer flex border-2 border-fade2 flex-col  space-y-6 ${
                state !== "provider" && "bg-fadesecondary"
              } `}
            >
              <div className="">
                <Briefcase
                  className={`${
                    state !== "provider" ? "text-secondary" : "text-teal"
                  } `}
                />
              </div>

              <div className="flex justify-between gap-5">
                <div className="space-y-4">
                  <h1 className="header">Credentialing Organization</h1>
                  <p className="raleway">
                    Lorem Ipsum set dolor is a dummy text for place holders.
                  </p>
                </div>

                <div
                  onClick={() => setState("provider")}
                  className="cursor-pointer"
                >
                  <div
                    className={`p-1 rounded-full ${
                      state !== "provider" ? "border-secondary" : "border-fade2"
                    }  border-2 `}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        state !== "provider"
                          ? "border-secondary bg-secondary"
                          : "border-none"
                      } border-2 `}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SubmitButton isLoading={isLoading}>Continue</SubmitButton>
            </div>

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
