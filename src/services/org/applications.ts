/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { handleError } from "../error";

const { VITE_API_BASE_URL } = import.meta.env;

// Create Application for Providers to fill
export const createApplicationOrg = async (formData: any) => {
  const token = localStorage.getItem("enrollai-org-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/organizations/create-application`,
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

// Get Applications created for Providers
export const getCreatedApplications = async (page = 1, size = 10) => {
  const token = localStorage.getItem("enrollai-org-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/organizations/created-applications`,
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
    console.log(error);

    return handleError(error);
  }
};

// Toggle Created Application Status
export const toggleCreatedApplicationStatus = async (id: string) => {
  const token = localStorage.getItem("enrollai-org-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  if (!id) {
    throw new Error("ID is required");
  }

  try {
    const response = await axios.put(
      `${VITE_API_BASE_URL}/organizations/toggle-organization-application-status/${id}`,
      {},
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

// Delete Created Applications
export const deleteCreatedApplications = async (id: string) => {
  const token = localStorage.getItem("enrollai-org-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.delete(
      `${VITE_API_BASE_URL}/organizations/delete/${id}`,
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

// Applications (Providers)

// Get (All, Imcoming, Declined & Approved) Applications from Providers Based on their Status

export const getApplicationsFromProvidersBaseonStatus = async (
  id: string,
  status: string,
  page = 1,
  size = 10
) => {
  const token = localStorage.getItem("enrollai-org-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  if (!id) {
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
        params: { id, status, page, size, order_by: "desc" },
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

// Get Stats of Providers Applications in Organizations Dashboard
export const getOrganizationApplicationStats = async (
  organizationId: string
) => {
  const token = localStorage.getItem("enrollai-org-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  if (!organizationId) {
    throw new Error("Organization Id not found");
  }
  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/organizations/${organizationId}/application-stats`,

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

// Update (Providers) Filled Applications Based On The Status Passed
export const updateProviderApplicationByOrg = async (
  id: string,
  status: string
) => {
  const token = localStorage.getItem("enrollai-org-user");

  console.log(status, "status,statusstatus");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.put(
      `${VITE_API_BASE_URL}/organizations/update-application/${id}`,
      {},
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: { status },
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

// Providers

// Get Applications of Providers which their Applications have been Approved
export const getApprovedProviders = async (id: string, page = 1, size = 10) => {
  const token = localStorage.getItem("enrollai-org-user");

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
        params: { page, size, order_by: "desc" },
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
