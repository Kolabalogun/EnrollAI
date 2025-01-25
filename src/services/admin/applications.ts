/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "../error";

const { VITE_API_BASE_URL } = import.meta.env;

export const getAllApplications = async (organization_name: string) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  if (!organization_name) {
    throw new Error("Organization ID is required");
  }

  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/organizations/applications`,
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

export const getPendingApplications = async (organization_name: string) => {
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

export const getApprovedApplications = async (id: string) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  if (!id) {
    throw new Error("Organization ID is required");
  }

  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/organizations/approved-applications/${id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: { id },
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
export const getApplicationStats = async () => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/admin/application-stats`,

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

export const getAOrganizations = async () => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/admin/credentialing-organizations`,

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

export const getProviders = async (id: string) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/organizations/get-providers/${id}`,
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
    console.error(error);
    return handleError(error);
  }
};

export const declinedApplication = async (id: string) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.put(
      `${VITE_API_BASE_URL}/organizations/decline/${id}`,

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
