/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { ForgetPasswordCodeFormValidation } from "@/lib/validation";
import { AuthLayout } from "@/layout";
import { useLocation, useNavigate } from "react-router-dom";
import { GET_STARTED_ROUTE, LOGIN_ROUTE } from "@/router/routes";
import {
  PinInput,
  PinInputField,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import showToast from "@/components/common/showtoast";
import SuccessModal from "@/components/modals/success";
import { resendOTP, verifyOTP } from "@/services/auth";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [resendLoading, setResendLoading] = useState(false);
  const location = useLocation();
  const toast = useToast();
  const { email } = location.state || {};

  const [timeLeft, setTimeLeft] = useState(10);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate(LOGIN_ROUTE);
    }
  }, [email, navigate]);

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
      const payload = {
        email: email,
        otp: values.code,
      };

      const res = await verifyOTP(payload);
      console.log(res);
      if (res.success) {
        showToast(toast, "Enroll AI", "success", `${res.data.msg}`);
        onOpen();
      } else {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `${res.message || "An error occurred."} `
        );
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        "An error has occurred. Please try again"
      );
    }
  }

  const resendCodeToEmail = async () => {
    setResendLoading(true);
    try {
      console.log(email);

      const res = await resendOTP(email);
      console.log(res);

      if (res.success) {
        console.log("OTP resent successfully:", res.data);
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
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        "An error has occurred. Please try again"
      );
    } finally {
      setResendLoading(false);
    }
  };

  const { code } = form.getValues();
  const { isSubmitting } = form.formState;

  const { setValue } = form;

  useWatch({
    control: form.control,
    name: "code",
  });

  return (
    <AuthLayout
      title="Verify your email"
      desc={`Please enter the 6-digit code we sent to <br/> <strong>${email?.toLowerCase()}</strong>.    `}
      form={form}
      onSubmit={onSubmit}
      isLoading={isSubmitting || resendLoading}
      isResendEnabled={isResendEnabled}
      formatTime={formatTime}
      timeLeft={timeLeft}
      resendEmailFunction={resendCodeToEmail}
    >
      {/* Confirmation Modal  */}

      <SuccessModal
        onClose={onClose}
        isOpen={isOpen}
        title="Verification Successful"
        desc="Click Continue to setup-up your profile."
        handleClick={() => navigate(GET_STARTED_ROUTE)}
      />
      <div className="flex my-10 items-center justify-center gap-3">
        <PinInput
          value={code}
          onChange={(e) => setValue("code", e)}
          focusBorderColor="#b076e7"
          mask
          otp
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
