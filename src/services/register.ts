/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "./error";

const { VITE_API_BASE_URL } = import.meta.env;

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
