/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "./error";

const { VITE_API_BASE_URL } = import.meta.env;

export const getAllApplicationsForProviders = async () => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/organizations/getApplications`,

      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};
