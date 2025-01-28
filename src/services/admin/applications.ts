/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "../error";

const { VITE_API_BASE_URL } = import.meta.env;

// Get (All, Imcoming, Declined & Approved) Applications from Providers Based on their Status (Admin Route)

export const getAllApplicationsBasedOnStatus = async (
  page = 1,
  size = 10,
  status: string
) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  if (!status) {
    throw new Error("Status is required");
  }

  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/admin/applications/all`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: { status, page, size, order_by: "desc" },
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

// Get Stats of Providers Applications in Admin Dashboard
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

// Get All Admin Users   (FE: Admin Route)
export const getAllAdmins = async (page = 1, size = 10) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/admin/all`,

      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: { page, size, order_by: "desc" },
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

// Get All Organizations Users   (FE: Admin Route)
export const getAllOrganizations = async (page = 1, size = 10) => {
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
        params: { page, size, order_by: "desc" },
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

// Get All Providers Users   (FE: Admin Route)
export const getAllProviders = async (page = 1, size = 10) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  try {
    const response = await axios.get(`${VITE_API_BASE_URL}/admin/providers`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: { page, size, order_by: "desc" },
    });
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

// Change Status of a Provider or Organization Account (FE: Admin Route)
export const changeAccountStatus = async (
  id: string,
  type: string,
  status: string
) => {
  const token = localStorage.getItem("enrollai-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.put(
      `${VITE_API_BASE_URL}/admin/change-account-status`,
      {},
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: { id, type, status },
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

// Delete Provider Or Organization Account Along side all thier Applications  (FE: Admin Route)

export const deleteProviderOrOrganization = async (
  id: string,
  type: string
) => {
  const token = localStorage.getItem("enrollai-user");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.delete(
      `${VITE_API_BASE_URL}/admin/delete-provider-or-organization`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: { id, type },
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
