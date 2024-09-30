/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CreateNewPasswordFormValidation } from "@/lib/validation";
import { CustomFormField } from "@/components/common";
import { FormFieldType } from "@/components/common/customFormField";

import { AuthLayout } from "@/layout";

import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "@/router/routes";

import { useToast } from "@chakra-ui/react";
import showToast from "@/components/common/showtoast";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const toast = useToast();
  // const location = useLocation();
  // const { email } = location.state || {};
  // const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const isLoading = false;

  // const [dialogOpen, setDialogOpen] = useState(false);

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
    // const payload = {
    //   email: email,
    //   newPassword: values.password,
    // };

    try {
      console.log(values);

      // const res = await resetPassword(payload).unwrap();

      // console.log(res);

      // showToast(toast, "Enroll AI", "success", `${res.msg}`);

      navigate(LOGIN_ROUTE);
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
    <>
      {/* <SuccessModal
        isLoading={isLoading}
        onSubmit={() => navigate(LOGIN_ROUTE)}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        title={"Great Job!"}
        desc={
          "You have successfully updated your account password. Please click on “Login” and use your new password to access your account."
        }
        buttonText={"Login"}
      /> */}

      <AuthLayout
        title="Create new password"
        desc={"Fantastic! Let's generate a new password for your account."}
        form={form}
        onSubmit={onSubmit}
        isLoading={isLoading}
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
