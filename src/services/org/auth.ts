/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "..";
import { handleError } from "../error";

// Login Provider
export const loginOrg = async (formData: any) => {
  try {
    const response = await axiosInstance.post(`/organizations/login`, formData);
    return {
      success: true,
      data: response.data,

      message: "You have successfully signed in.",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

// Organization registration
export const organizationRegisterProvider = async (formData: any) => {
  try {
    const response = await axiosInstance.post(
      `/organizations/register`,
      formData
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

export const verifyOrganizationsOTP = async (formData: any) => {
  try {
    const response = await axiosInstance.post(
      `/organizations/verify-otp`,
      formData
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

export const resendOrganizationOTP = async (email: string) => {
  try {
    const response = await axiosInstance.get(
      `/organizations/resend-otp/${email}`
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

export const forgotOrganizationPasswordApi = async (formData: any) => {
  try {
    const response = await axiosInstance.post(
      `/organizations/forgot-password`,
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
export const resetOrganizationPasswordApi = async (formData: any) => {
  try {
    const response = await axiosInstance.post(
      `/organizations/reset-password`,
      formData
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

//  Update Org Profile

export const updateProfileOrg = async (formData: any) => {
  try {
    const response = await axiosInstance.put(`/organizations/update`, formData);
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const changePasswordOrg = async (formData: any) => {
  try {
    const response = await axiosInstance.put(
      `/organizations/change-password`,
      formData
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

export const deleteOrgAccount = async () => {
  try {
    const response = await axiosInstance.delete(`/organizations/delete`);
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};
