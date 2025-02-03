/* eslint-disable @typescript-eslint/no-explicit-any */
import { handleError } from "./error";
import axiosInstance from ".";

// Login Provider
export const loginUser = async (formData: any) => {
  try {
    const response = await axiosInstance.post(`/auth/login`, formData);
    return {
      success: true,
      data: response.data,
      message: "You have successfully signed in.",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const refreshToken = async (token: string) => {
  try {
    const response = await axiosInstance.post(`/auth/refresh-token`, { token });
    return { success: true, data: response.data };
  } catch (error: any) {
    console.log("Refresh token error:", error);
    return handleError(error);
  }
};

export const logoutt = async () => {
  try {
    const response = await axiosInstance.post(`/auth/logout`);
    return { success: true, data: response };
  } catch (error: any) {
    return handleError(error);
  }
};
// Provider Registration
export const registerProvider = async (formData: any) => {
  try {
    const response = await axiosInstance.post(`/auth/register`, formData);
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
    const response = await axiosInstance.post(
      `/auth/forgot-password`,
      formData
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
    const response = await axiosInstance.post(`/auth/reset-password`, formData);
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
    const response = await axiosInstance.post(`/auth/verify-otp`, formData);
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
    const response = await axiosInstance.get(`/auth/resend-otp/${email}`);
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
  try {
    const response = await axiosInstance.put(`/auth/update-profile`, formData);
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
  try {
    const response = await axiosInstance.put(`/auth/change-password`, formData);
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
  try {
    const response = await axiosInstance.delete(`/auth/delete`);
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};
