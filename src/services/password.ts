/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "./error";

const { VITE_API_BASE_URL } = import.meta.env;

export const forgotPasswordApi = async (formData: any) => {
  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/auth/forgot-password`,
      formData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return {
      success: true,
      data: response.data,
      message: "OTP has been sent to your mail.",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const resetPasswordApi = async (formData: any) => {
  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/auth/reset-password`,
      formData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return {
      success: true,
      data: response.data,
      message: "You've successfully reset your password.",
    };
  } catch (error: any) {
    return handleError(error);
  }
};
