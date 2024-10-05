/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";

interface ErrorResponse {
  success: boolean;
  message: string;
  status?: number;
  data?: any;
  token?: string;
  accountType?: string;
}

export const handleError = (error: AxiosError): ErrorResponse => {
  if (error.response) {
    const status = error.response.status;
    if (status === 400) {
      return {
        success: false,
        message: (error.response.data as any).msg || "Validation error.",
        status,
      };
    } else if (status === 500) {
      return {
        success: false,
        message: "Server error, please try again later.",
        status,
      };
    } else {
      return {
        success: false,
        message: (error.response.data as any).msg || "Something went wrong.",
        status,
      };
    }
  } else if (error.request) {
    return {
      success: false,
      message: "Network error. Please check your internet connection.",
    };
  } else {
    return {
      success: false,
      message: error.message || "An unknown error occurred.",
    };
  }
};
