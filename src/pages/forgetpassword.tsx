/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { CustomFormField } from "@/components/common";
import { FormFieldType } from "@/components/common/customFormField";
import {
  ForgetPasswordFormValidation,
  ForgetPasswordCodeFormValidation,
  ForgetPasswordUnionValidation,
} from "@/lib/validation";
import { AuthLayout } from "@/layout";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import showToast from "@/components/common/showtoast";
import { CREATE_NEW_PASSWORD_ROUTE } from "@/router/routes";
import { forgotPasswordApi, resendOTP, verifyOTP } from "@/services/auth";
import {
  verifyOrganizationsOTP,
  resendOrganizationOTP,
  forgotOrganizationPasswordApi,
} from "@/services/org/auth";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [emailIsPresent, setEmailIsPresent] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [userType, setUserType] = useState<
    "provider" | "organization" | string
  >("provider");

  const form = useForm<z.infer<typeof ForgetPasswordUnionValidation>>({
    resolver: zodResolver(
      emailIsPresent
        ? ForgetPasswordCodeFormValidation
        : ForgetPasswordFormValidation
    ),
    defaultValues: emailIsPresent ? { code: "" } : { email: "" },
  });

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      setIsResendEnabled(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsLeft
      .toString()
      .padStart(2, "0")}`;
  };

  async function onSubmit(
    values: z.infer<typeof ForgetPasswordUnionValidation>
  ) {
    try {
      console.log(values);
      if ("email" in values) {
        const payload = {
          email: values.email.toLowerCase().trim(),
        };

        let res;
        if (userType === "provider") {
          res = await forgotPasswordApi(payload);
        } else {
          res = await forgotOrganizationPasswordApi(payload);
        }

        if (res.success) {
          showToast(
            toast,
            "Enroll AI",
            "success",
            `${
              res.data.msg || res.message || "OTP has been sent to your mail."
            } `
          );

          setEmailIsPresent(values.email.toLowerCase().trim());
        } else {
          showToast(
            toast,
            "Enroll AI",
            "error",
            `${res.message || "An error occurred."} `
          );
        }

        form.reset();
      } else if ("code" in values) {
        const payload = {
          email: emailIsPresent.toLowerCase().trim(),
          otp: values.code,
        };

        let res;
        if (userType === "provider") {
          res = await verifyOTP(payload);
        } else {
          res = await verifyOrganizationsOTP(payload);
        }

        if (res.success) {
          showToast(
            toast,
            "Enroll AI",
            "success",
            `${res.data.msg || res.message || "OTP verified successfully"} `
          );

          setEmailIsPresent("");

          navigate(CREATE_NEW_PASSWORD_ROUTE, {
            state: {
              email: emailIsPresent.toLowerCase().trim(),
              otp: values.code,
              userType,
            },
          });
        } else {
          showToast(
            toast,
            "Enroll AI",
            "error",
            `${res.message || "An error occurred."} `
          );
        }

        form.reset();
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        "An error occurred. Please try again later."
      );
    }
  }

  const resendCodeToEmail = async () => {
    setResendLoading(true);
    try {
      if (emailIsPresent) {
        let res;
        if (userType === "provider") {
          res = await resendOTP(emailIsPresent.toLowerCase().trim());
        } else {
          res = await resendOrganizationOTP(
            emailIsPresent.toLowerCase().trim()
          );
        }

        if (res.success) {
          showToast(
            toast,
            "Enroll AI",
            "success",
            `${res.data.msg || res.message || "OTP resent successfully"} `
          );
        } else {
          showToast(
            toast,
            "Enroll AI",
            "error",
            `${res.message || "An error occurred."} `
          );
        }
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        "An error occurred. Please try again later."
      );
    } finally {
      setResendLoading(false);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <AuthLayout
      title="Forget Password"
      desc={
        emailIsPresent
          ? `We have just emailed you instructions on how to reset your password along with a six-digit verification code to your email address at <strong>${emailIsPresent}</strong>. Please enter the code below to verify your email.`
          : "It’s not your fault it happened sometime, Enter your email address to get started."
      }
      form={form}
      onSubmit={onSubmit}
      isLoading={isSubmitting || resendLoading}
      isResendEnabled={emailIsPresent ? isResendEnabled : false}
      formatTime={formatTime}
      timeLeft={timeLeft}
      resendEmailFunction={resendCodeToEmail}
    >
      {emailIsPresent ? (
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="code"
          label="Code"
          placeholder="Enter the code"
        />
      ) : (
        <div className="space-y-3">
          <div className="flex flex-col space-y-1">
            <p className="checkbox-label text-[#344054] font-medium plus-jakarta text-[13px]  ">
              Select Provider or Organization Account
            </p>

            <select
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="py-3.5 px-2 outline-none text-[13px] bg-transparent  rounded-lg plus-jakarta placeholder:text-gray-300 placeholder:text-[13px] border border-[#d9d9d9]"
            >
              <option value="provider">Provider</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="email"
            label="Email"
            placeholder="Enter your email address"
          />
        </div>
      )}
    </AuthLayout>
  );
};

export default ForgetPassword;
