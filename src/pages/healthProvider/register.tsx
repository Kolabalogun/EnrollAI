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
// import { useRegisterMutation } from "@/services/auth";
import { VERIFY_EMAIL_ROUTE } from "@/router/routes";
import showToast from "@/components/common/showtoast";

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();
  // Registration mutation hook
  //   const [register, { isLoading }] = useRegisterMutation();

  const isLoading = false;

  const form = useForm<z.infer<typeof RegisterFormValidation>>({
    resolver: zodResolver(RegisterFormValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterFormValidation>) {
    console.log(values);

    // const payload = {
    //   fullName: values.name,
    //   email: values.email,
    //   password: values.password,
    //   confirmPassword: values.confirmPassword,
    // };

    try {
      //   const res = await register(payload).unwrap();

      //   console.log(res);
      //   showToast(toast, "Enroll AI", "success", `${res.msg}`);

      setTimeout(() => {
        navigate(VERIFY_EMAIL_ROUTE, { state: { email: values.email } });
      }, 2000);
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

  return (
    <AuthLayout
      title="Create your account"
      desc="Lorem Ipsum Set dolor is a dummy text for place holders"
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading}
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
        name="name"
        label="Professional (Optional)"
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
