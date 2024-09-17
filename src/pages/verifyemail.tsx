/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CustomFormField } from "@/components/common";
import { FormFieldType } from "@/components/common/customFormField";

import { ForgetPasswordCodeFormValidation } from "@/lib/validation";
import { AuthLayout } from "@/layout";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "@/router/routes";
// import { useVerifyOtpMutation, useResendOtpMutation } from "@/services/auth";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import showToast from "@/components/common/showtoast";

const VerifyEmail = () => {
  const navigate = useNavigate();

  // const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  // const [resendOtp, { isLoading: resendLoading }] = useResendOtpMutation();

  const isLoading = false;
  const resendLoading = false;

  const location = useLocation();
  const toast = useToast();
  const { email } = location.state || {};

  const [timeLeft, setTimeLeft] = useState(10);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  // useEffect(() => {
  //   !email && navigate(LOGIN_ROUTE);
  // }, []);

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

  const form = useForm<z.infer<typeof ForgetPasswordCodeFormValidation>>({
    resolver: zodResolver(ForgetPasswordCodeFormValidation),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof ForgetPasswordCodeFormValidation>
  ) {
    try {
      console.log(values);

      // const payload = {
      //   email: email,
      //   otp: values.code,
      // };

      // const res = await verifyOtp(payload).unwrap();

      // console.log(res);

      // showToast(toast, "Crawler", "success", `${res.msg}`);

      navigate(LOGIN_ROUTE);
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Crawler",
        "error",
        "An error has occurred. Please try again"
      );
    }
  }

  const resendCodeToEmail = async () => {
    try {
      // const payload = {
      //   email: email,
      // };
      // const res = await resendOtp(payload).unwrap();
      // console.log(res);
      // showToast(toast, "Crawler", "success", `${res.msg}`);
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Crawler",
        "error",
        "An error has occurred. Please try again"
      );
    }
  };

  return (
    <AuthLayout
      title="Verify your email"
      desc={`We've just sent a six-digit verification code to your email address at <strong>${email}</strong>. Kindly input the code below to verify your email.`}
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading || resendLoading}
      isResendEnabled={isResendEnabled}
      formatTime={formatTime}
      timeLeft={timeLeft}
      resendEmailFunction={resendCodeToEmail}
    >
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="code"
        label={"Enter 6-digits code"}
        placeholder={"Enter 6-digits code"}
        iconAlt="text"
      />
    </AuthLayout>
  );
};

export default VerifyEmail;
