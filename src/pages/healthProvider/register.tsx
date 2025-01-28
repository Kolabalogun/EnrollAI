/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterFormValidation } from "@/lib/validation";
import { CustomFormField } from "@/components/common";
import { FormFieldType } from "@/components/common/customFormField";
import { AuthLayout } from "@/layout";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { VERIFY_EMAIL_ROUTE } from "@/router/routes";
import showToast from "@/components/common/showtoast";
import { registerProvider } from "@/services/auth";

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const form = useForm<z.infer<typeof RegisterFormValidation>>({
    resolver: zodResolver(RegisterFormValidation),
    defaultValues: {
      name: "",
      professionalTitle: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterFormValidation>) {
    console.log(values);

    const payload = {
      fullName: values.name,
      email: values.email.toLowerCase().trim(),
      password: values.password,
      confirmPassword: values.confirmPassword,
      accountType: "provider",
      professionalTitle: values.professionalTitle,
    };

    try {
      const res = await registerProvider(payload);

      if (res.success) {
        console.log(res);
        showToast(
          toast,
          "Registration successful!",
          "success",
          `${res?.data?.msg || "Registration successful!"}`
        );
        setTimeout(() => {
          navigate(VERIFY_EMAIL_ROUTE, { state: { email: values.email } });
        }, 2000);
      } else {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `${res.message || "An error occurred."} `
        );
      }

      console.log(res);
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "An error has occurred. Please try again"} `
      );
    }
  }

  const { isSubmitting } = form.formState;

  return (
    <AuthLayout
      title="Create your account"
      desc="Lorem Ipsum Set dolor is a dummy text for place holders"
      form={form}
      onSubmit={onSubmit}
      isLoading={isSubmitting}
    >
      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="name"
        label="Full name"
        placeholder="Enter your name"
      />

      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="professionalTitle "
        label="Professional Title (Optional)"
        placeholder="Example (Dr.)"
      />

      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="email"
        label="Email"
        placeholder="Enter your email address"
        iconSrc="/assets/img/email.svg"
        iconAlt="email"
      />

      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="password"
        label="Password"
        placeholder="Password"
        iconSrc="/assets/img/key.svg"
        iconAlt="user"
      />

      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="confirmPassword"
        label="Confirm New Password"
        placeholder="Password"
        iconAlt="password"
      />

      <CustomFormField
        fieldType={FormFieldType.CHECKBOX}
        control={form.control}
        name="termsAndConditions"
        label="I accept the Enroll Hub’s"
      />
    </AuthLayout>
  );
};

export default Register;
