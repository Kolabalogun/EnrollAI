/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "./error";

const { VITE_API_BASE_URL } = import.meta.env;

export const verifyOTP = async (formData: any) => {
  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/auth/verify-otp`,
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
      message: "You have been verified",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const resendOTP = async (email: string) => {
  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/auth/resend-otp/${email}`,
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
      message: "OTP resent successfully",
    };
  } catch (error: any) {
    console.log(error);

    return handleError(error);
  }
};
