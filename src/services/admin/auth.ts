/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "../error";

const { VITE_API_BASE_URL } = import.meta.env;

export const adminRegister = async (formData: any) => {
  const token = localStorage.getItem("enrollai-user");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/admin/create`,
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
  const token = localStorage.getItem("enrollai-user");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.put(
      `${VITE_API_BASE_URL}/admin/update/profile`,
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

export const deleteAdminAccount = async () => {
  const token = localStorage.getItem("enrollai-user");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.delete(`${VITE_API_BASE_URL}/admin/delete`, {
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
