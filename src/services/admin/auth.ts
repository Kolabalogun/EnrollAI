/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "..";
import { handleError } from "../error";

export const adminRegister = async (formData: any) => {
  try {
    const response = await axiosInstance.post(`/admin/create`, formData);
    return {
      success: true,
      data: response.data,
      message: "You have successfully registered a new account.",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred.",
    };
  }
};

export const updateAdminProfile = async (formData: any) => {
  try {
    const response = await axiosInstance.put(`/admin/update/profile`, formData);
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const deleteAdminAccount = async () => {
  try {
    const response = await axiosInstance.delete(`/admin/delete`);
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};
