/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateNewPasswordFormValidation } from "@/lib/validation";
import { CustomFormField } from "@/components/common";
import { FormFieldType } from "@/components/common/customFormField";
import { AuthLayout } from "@/layout";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "@/router/routes";
import { useDisclosure, useToast } from "@chakra-ui/react";
import showToast from "@/components/common/showtoast";
import SuccessModal from "@/components/modals/success";
import { resetPasswordApi } from "@/services/password";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();
  const { email, otp } = location.state || {};
  const { onOpen, onClose, isOpen } = useDisclosure();

  const form = useForm<z.infer<typeof CreateNewPasswordFormValidation>>({
    resolver: zodResolver(CreateNewPasswordFormValidation),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof CreateNewPasswordFormValidation>
  ) {
    const payload = {
      email,
      otp,
      newPassword: values.password,
    };

    try {
      console.log(values);

      const res = await resetPasswordApi(payload);
      console.log(res);

      if (res.success) {
        showToast(toast, "Enroll AI", "success", `${res.message}`);

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
  const { isSubmitting } = form.formState;
  return (
    <>
      <SuccessModal
        onClose={onClose}
        isOpen={isOpen}
        title="Reset Successful"
        desc="You have successfully updated your account password. Please click on “Login” and use your new password to access your account."
        handleClick={() => navigate(LOGIN_ROUTE)}
      />

      <AuthLayout
        title="Create new password"
        desc={"Fantastic! Let's generate a new password for your account."}
        form={form}
        onSubmit={onSubmit}
        isLoading={isSubmitting}
      >
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="password"
          label="New Password"
          placeholder="Password"
          iconAlt="password"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="confirmPassword"
          label="Confirm New Password"
          placeholder="Password"
          iconAlt="password"
        />
      </AuthLayout>
    </>
  );
};

export default CreateNewPassword;
