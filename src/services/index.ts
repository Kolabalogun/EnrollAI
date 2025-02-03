import axios from "axios";
import { refreshToken as getNewToken, logoutt } from "./auth";
import { logout } from "@/redux/features/authSlice";
import { store } from "@/redux/store";

const { VITE_API_BASE_URL } = import.meta.env;

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the access token in requests
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken =
      localStorage.getItem("enrollai-user") ||
      localStorage.getItem("enrollai-org-user");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor for Token Handling
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loop (check if already retried)
    if (originalRequest._retry) {
      console.error("Retry already attempted. Rejecting request.");
      return Promise.reject(error);
    }

    // Check for 401 (Unauthorized) and handle expired JWT
    if (error.response?.status === 401) {
      const errorMessage = error.response?.data?.msg || "";

      if (
        errorMessage.includes("Your session has expired. Please log in again")
      ) {
        console.warn("JWT expired. Logging out user.");
        await logoutt();
        store.dispatch(logout());
        localStorage.removeItem("enrollai-user");
        localStorage.removeItem("enrollai-org-user");
        localStorage.removeItem("enrollai-user-refresh-token");
        return Promise.reject(error);
      }

      originalRequest._retry = true; // Mark request as retried

      const refreshToken = localStorage.getItem("enrollai-user-refresh-token");

      if (refreshToken) {
        try {
          const res = await getNewToken(refreshToken);

          if (res?.success) {
            const newAccessToken = res.data.accessToken;

            // Store new token
            localStorage.setItem("enrollai-user", newAccessToken);
            localStorage.setItem("enrollai-org-user", newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            // Retry the original request with the new token
            return axiosInstance(originalRequest);
          }
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
        }
      }

      // Log out user if refresh fails
      console.warn("Logging out user due to invalid refresh token.");
      await logoutt();
      store.dispatch(logout());
      localStorage.removeItem("enrollai-user");
      localStorage.removeItem("enrollai-user-refresh-token");

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
