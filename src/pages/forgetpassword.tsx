/* eslint-disable @typescript-eslint/no-unused-vars */
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
// import { CREATE_NEW_PASSWORD_ROUTE } from "@/router/routes";
// import {
//   useForgetPasswordMutation,
//   useVerifyOtpMutation,
//   useResendOtpMutation,
// } from "@/services/auth";
import { useToast } from "@chakra-ui/react";
import showToast from "@/components/common/showtoast";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const toast = useToast();
  // const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
  // const [verifyOtp, { isLoading: verifyOtpLoading }] = useVerifyOtpMutation();

  const [emailIsPresent, setEmailIsPresent] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  // const [resendOtp, { isLoading: resendLoading }] = useResendOtpMutation();

  const isLoading = false;
  const verifyOtpLoading = false;
  const resendLoading = false;

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
      // Perform actions based on whether email or code is present
      // if ("email" in values) {
      //   // Handle email submission

      //   const payload = {
      //     email: values.email,
      //   };

      //   const res = await forgetPassword(payload).unwrap();

      //   console.log(res);

      //   showToast(toast, "Crawler", "success", res.msg);

      //   setEmailIsPresent(values.email);
      //   form.reset();
      // } else if ("code" in values) {
      //   // Handle code submission

      //   const payload = {
      //     email: emailIsPresent,
      //     otp: values.code,
      //   };

      //   const res = await verifyOtp(payload).unwrap();

      //   console.log(res);

      //   showToast(toast, "Crawler", "success", res.msg);

      //   setEmailIsPresent("");

      //   navigate(CREATE_NEW_PASSWORD_ROUTE, {
      //     state: { email: emailIsPresent },
      //   });
      //   form.reset();
      // }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Crawler",
        "error",
        "An error occurred. Please try again later."
      );
    }
  }

  const resendCodeToEmail = async () => {
    try {
      if (emailIsPresent) {
        // const res = await resendOtp({ email: emailIsPresent }).unwrap();
        // showToast(toast, "Crawler", "success", res.msg);
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Crawler",
        "error",
        "An error occurred. Please try again later."
      );
    }
  };

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
      isLoading={isLoading || verifyOtpLoading || resendLoading}
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
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="Enter your email address"
        />
      )}
    </AuthLayout>
  );
};

export default ForgetPassword;
