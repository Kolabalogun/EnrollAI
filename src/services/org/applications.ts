/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "../error";

const { VITE_API_BASE_URL } = import.meta.env;

export const createApplicationOrg = async (formData: any) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/organizations/application`,
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
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const getCreatedApplications = async () => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/organizations/orgapplications`,
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
    console.log(error);

    return handleError(error);
  }
};

export const getIncomingApplications = async (organization_name: string) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  if (!organization_name) {
    throw new Error("Organization ID is required");
  }

  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/organizations/incoming-applications`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: { organization_name },
      }
    );
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    console.error(error);
    return handleError(error);
  }
};
