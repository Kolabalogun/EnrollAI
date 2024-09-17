/* eslint-disable @typescript-eslint/no-explicit-any */

import { GoogleIcon } from "@/assets/icon";
import { Logo } from "@/assets/img";
import { CustomFormField, SubmitButton } from "@/components/common";
import { FormFieldType } from "@/components/common/customFormField";
import { Form } from "@/components/ui/form";
import {
  FORGET_PASSWORD_ROUTE,
  LOGIN_ROUTE,
  TYPE_OF_REG,
} from "@/router/routes";
import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

interface AuthLayoutProps<T extends z.ZodType<any, any>> {
  title: string;
  desc: string;
  form: UseFormReturn<z.infer<T>>;
  onSubmit: (values: z.infer<T>) => void;
  isLoading: boolean;
  children: ReactNode;
  formatTime?: (seconds: number) => string;
  isResendEnabled?: boolean;
  timeLeft?: number;
  resendEmailFunction?: () => void;
}

const AuthLayout = <T extends z.ZodType<any, any>>({
  title,
  desc,
  form,
  onSubmit,
  isLoading,
  children,
  formatTime,
  isResendEnabled,
  timeLeft,
  resendEmailFunction,
}: AuthLayoutProps<T>) => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-primary   px-5   py-5">
      <div className="bg-white py-5 px-4 rounded-md shadow-sm">
        <Link to={"/"} className="flex items-center gap-1 ">
          <img src={Logo} alt="" className="h-10" />
          <p className=" font-medium text-base   text-secondary">Enroll Hub</p>
        </Link>
      </div>

      <div className="min-h-[85vh] my-10 flex items-center  flex-col w-full  justify-center ">
        <div className="flex flex-col  ">
          <Form {...form}>
            <section className="mb-8 w-96 text-center raleway space-y-4">
              <h1 className="header  ">{title}</h1>
              <p
                className="text-text-primary text-sm"
                dangerouslySetInnerHTML={{ __html: desc }}
              ></p>
            </section>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 flex-1"
            >
              {children}

              {title === "Welcome Back!" && (
                <div className="flex justify-between item-center">
                  {/* <div
                    onClick={() => navigate(FORGET_PASSWORD_ROUTE)}
                    className="  cursor-pointer"
                  >
                    <p className="text-[#344054] font-medium plus-jakarta text-[13px]">
                      Remember me
                    </p>
                  </div> */}

                  <CustomFormField
                    fieldType={FormFieldType.CHECKBOX}
                    control={form.control}
                    name="rememberMe"
                    label="Remember me"
                  />

                  <div
                    onClick={() => navigate(FORGET_PASSWORD_ROUTE)}
                    className="  cursor-pointer"
                  >
                    <p className="text-[#344054] font-medium plus-jakarta text-[13px]">
                      Forget Password?
                    </p>
                  </div>
                </div>
              )}

              <SubmitButton
                className="bg-secondary hover:text-secondary border-[##b076e7] border-2  py-6 rounded-xl  raleway text-[13px] font-semibold text-white w-full "
                isLoading={isLoading}
              >
                {title === "Welcome Back!"
                  ? "Login"
                  : title === "Create your account"
                  ? "Create an account"
                  : "Continue"}
              </SubmitButton>

              {title === "Create your account" && (
                <div className="flex items-center border border-fade2 rounded-lg p-3 justify-center gap-3">
                  <img src={GoogleIcon} className="h-4" alt="" />
                  <p className="raleway font-bold plus-jakarta">
                    Sign up with Google
                  </p>
                </div>
              )}

              {title === "Verify your email" && (
                <div className="flex text-center items-center">
                  <p className="text-sm my-1">
                    Didn't received the code?{" "}
                    <span
                      onClick={resendEmailFunction}
                      className={` ${
                        !isResendEnabled
                          ? "text-dark-200"
                          : "text-blue cursor-pointer"
                      } font-medium text-sm  `}
                    >
                      Resend{" "}
                      {!isResendEnabled &&
                        formatTime &&
                        `in ${formatTime(timeLeft || 0)}`}
                    </span>
                  </p>
                </div>
              )}

              <div className="flex text-center w-full items-center">
                <p className="text-sm text-center w-full plus-jakarta my-1">
                  {title === "Welcome Back!"
                    ? "Don't have an account? "
                    : title === "Create your account"
                    ? "Already have an account? "
                    : ""}
                  <span
                    onClick={() =>
                      navigate(
                        title === "Welcome Back!"
                          ? TYPE_OF_REG
                          : title === "Create your account"
                          ? LOGIN_ROUTE
                          : "#"
                      )
                    }
                    className="text-tertiary font-medium text-sm cursor-pointer"
                  >
                    {title === "Welcome Back!"
                      ? "Sign Up"
                      : title === "Create your account"
                      ? "Login"
                      : ""}
                  </span>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
