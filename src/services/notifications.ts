/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "./error";

const { VITE_API_BASE_URL } = import.meta.env;

export const getAllNotifications = async () => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.get(`${VITE_API_BASE_URL}/activity/recent`, {
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
    console.log(error);

    return handleError(error);
  }
};

export const getRecentNotifications = async () => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.get(`${VITE_API_BASE_URL}/activity/recent`, {
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
    console.log(error);

    return handleError(error);
  }
};
