/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "./error";

const { VITE_API_BASE_URL } = import.meta.env;

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
