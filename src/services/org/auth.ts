/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "../error";

const { VITE_API_BASE_URL } = import.meta.env;

// Login Provider
export const loginOrg = async (formData: any) => {
  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/organizations/login`,
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

// Organization registration
export const organizationRegisterProvider = async (formData: any) => {
  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/organizations/register`,
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

//  Update Org Profile

export const updateProfileOrg = async (formData: any) => {
  // Get Token
  const token = localStorage.getItem("enrollai-user");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.put(
      `${VITE_API_BASE_URL}/organizations/update`,
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

export const changePasswordOrg = async (formData: any) => {
  // Get Token
  const token = localStorage.getItem("enrollai-user");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.put(
      `${VITE_API_BASE_URL}/organizations/change-password`,
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
