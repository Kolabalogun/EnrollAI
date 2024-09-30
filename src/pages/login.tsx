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
// import { useLoginMutation } from "@/services/auth";

import { useToast } from "@chakra-ui/react";

// import { useDispatch } from "react-redux";
// import { setCredentials, setIsAuthenticated } from "@/redux/features/authSlice";

import showToast from "@/components/common/showtoast";

const Login = () => {
  // const [login, { isLoading }] = useLoginMutation();
  // const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = false;
  async function onSubmit(values: z.infer<typeof LoginFormValidation>) {
    console.log(values);
    // setIsLoading(true);
    try {
      // Your form submission logic here

      // const { email, password } = values;

      // const res = await login({ email, password }).unwrap();

      // dispatch(setCredentials(res));

      // localStorage.setItem("enrollai-user", res.token);
      // dispatch(setIsAuthenticated(true));

      // showToast(toast, "Enroll AI", "success", "You've successfully signed in");

      navigate(DASHBOARD_ROUTE);
    } catch (error: any) {
      console.log(error);

      if (error.status === 400 && error.data.msg === "Account not verified") {
        showToast(
          toast,
          "Enroll AI",
          "error",
          "Please verify your email to continue"
        );

        setTimeout(() => {
          navigate(VERIFY_EMAIL_ROUTE, { state: { email: values.email } });
        }, 2000);
      } else if (error.status === "FETCH_ERROR") {
        showToast(toast, "Enroll AI", "error", `${error.error} `);
      } else {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `${error.data.msg || "An error has occurred. Please try again"} `
        );
      }
    }
  }

  return (
    <AuthLayout
      title="Welcome Back!"
      desc="Lorem Ipsum Set dolor is a dummy text for place holders"
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading}
    >
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
    </AuthLayout>
  );
};

export default Login;
