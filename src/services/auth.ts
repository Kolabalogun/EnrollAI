/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "./error";

const { VITE_API_BASE_URL } = import.meta.env;

// Login Provider
export const loginUser = async (formData: any) => {
  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/auth/login`,
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
      token: response.data.token,
      accountType: response.data.accountType,
      message: "You have successfully signed in.",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

// Provider Registration
export const registerProvider = async (formData: any) => {
  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/auth/register`,
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
      message: "You have been registered successfully.",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

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

//  Update Provider Profile

export const updateProfile = async (formData: any) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.put(
      `${VITE_API_BASE_URL}/auth/update-profile`,
      formData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const changePassword = async (formData: any) => {
  const token = localStorage.getItem("enrollai-user");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.put(
      `${VITE_API_BASE_URL}/auth/change-password`,
      formData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const deleteAccount = async () => {
  const token = localStorage.getItem("enrollai-user");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.delete(`${VITE_API_BASE_URL}/auth/delete`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};
