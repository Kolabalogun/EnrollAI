/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";
import { store } from "@/redux/store"; // Import your Redux store
import { logout } from "@/redux/features/authSlice";

interface ErrorResponse {
  success: boolean;
  message: string;
  status?: number;
  data?: any;
  accountType?: string;

  accessToken?: string;

  refreshToken?: string;
}

export const handleError = (error: AxiosError): ErrorResponse => {
  if (error.response) {
    const status = error.response.status;
    const message = (error.response.data as { msg?: string })?.msg;

    console.log(error);

    console.log("Error Message:", message);

    if (status === 401 || status === 403) {
      // Log out the user and clear local storage
      store.dispatch(logout());
      localStorage.removeItem("enrollai-user");
      localStorage.removeItem("enrollai-org-user");
      localStorage.removeItem("enrollai-user-refresh-token");

      return {
        success: false,
        message: message || "Session expired. Please log in again.",
        status,
      };
    }

    // Handle other errors
    return {
      success: false,
      message: message || "An error occurred.",
      status,
    };
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
