/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginFormValidation } from "@/lib/validation";
import { CustomFormField } from "@/components/common";
import { FormFieldType } from "@/components/common/customFormField";
import { AuthLayout } from "@/layout";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTE, VERIFY_EMAIL_ROUTE } from "@/router/routes";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import showToast from "@/components/common/showtoast";

import {
  setAccountType,
  setCredentials,
  setIsAuthenticated,
} from "@/redux/features/authSlice";
import { loginOrg } from "@/services/org/auth";

const OrganizationLogin = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginFormValidation>) {
    console.log(values);

    try {
      const { email, password } = values;

      const data = {
        workEmail: email,
        password,
      };

      const res = await loginOrg(data);

      // console.log(res.data);

      if (res.success) {
        const data = {
          ...res.data.organization,
          accountType: "organization",
        };

        console.log(data);

        dispatch(setCredentials(data));
        dispatch(setAccountType("organization"));
        localStorage.setItem("enrollai-user", res.token);
        dispatch(setIsAuthenticated(true));
        showToast(
          toast,
          "Enroll AI",
          "success",
          "You've successfully signed in"
        );

        navigate(DASHBOARD_ROUTE);
      } else {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `${res.message || "An error occurred."} `
        );

        if (res.message === "Account not verified") {
          showToast(
            toast,
            "Enroll AI",
            "error",
            "Please verify your email to continue"
          );
          setTimeout(() => {
            navigate(VERIFY_EMAIL_ROUTE, { state: { email: values.email } });
          }, 2000);
        }
      }
    } catch (error: any) {
      console.log(error);

      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.data.msg || "An error has occurred. Please try again"} `
      );
    }
  }
  const { isSubmitting } = form.formState;
  return (
    <AuthLayout
      title="Welcome Back!"
      desc="Lorem Ipsum Set dolor is a dummy text for place holders"
      form={form}
      onSubmit={onSubmit}
      isLoading={isSubmitting}
    >
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="email"
        label="Organization Email"
        placeholder="Enter your email address"
        iconSrc="/assets/img/email.svg"
        iconAlt="email"
      />

      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="password"
        label="Organization Password"
        placeholder="Password"
        iconSrc="/assets/img/key.svg"
        iconAlt="user"
      />
    </AuthLayout>
  );
};

export default OrganizationLogin;
