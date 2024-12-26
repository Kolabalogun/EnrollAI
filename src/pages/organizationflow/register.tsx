/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { OrganizationRegisterFormValidation } from "@/lib/validation";
import { CustomFormField } from "@/components/common";
import { FormFieldType } from "@/components/common/customFormField";
import { AuthLayout } from "@/layout";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { VERIFY_EMAIL_ROUTE } from "@/router/routes";
import showToast from "@/components/common/showtoast";
import { organizationRegisterProvider } from "@/services/auth";

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const form = useForm<z.infer<typeof OrganizationRegisterFormValidation>>({
    resolver: zodResolver(OrganizationRegisterFormValidation),
    defaultValues: {
      organizationName: "",
      adminFullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof OrganizationRegisterFormValidation>
  ) {
    console.log(values);

    const payload = {
      organizationName: values.organizationName,
      administratorFullName: values.adminFullName,
      workEmail: values.email,
      password: values.password,
    };

    try {
      const res = await organizationRegisterProvider(payload);

      if (res.success) {
        console.log(res);
        showToast(
          toast,
          "Registration successful!",
          "success",
          `${res.data.message}`
        );
        setTimeout(() => {
          navigate(VERIFY_EMAIL_ROUTE, { state: { email: values.email } });
        }, 2000);
      } else {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `${res.message || res.data?.msg || "An error occurred."} `
        );
      }

      console.log(res);
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
        name="organizationName"
        label="Organization Name"
        placeholder="Enter your organization name"
      />

      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="adminFullName"
        label="Administrator Full Name"
        placeholder="Example (Dr. Robert)"
      />

      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="email"
        label="Work Email"
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
