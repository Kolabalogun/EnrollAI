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
export const getCreatedApplications = async () => {
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

  console.log(token);

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

export const getAllOrgApplications = async (organization_name: string) => {
  const token = localStorage.getItem("enrollai-org-user");

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

export const getIncomingApplications = async (organization_name: string) => {
  const token = localStorage.getItem("enrollai-org-user");

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

export const getApprovedProviderApplications = async (id: string) => {
  const token = localStorage.getItem("enrollai-org-user");

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
export const getOrgApplicationStats = async (id: string) => {
  const token = localStorage.getItem("enrollai-org-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/organizations/${id}/application-stats`,

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

export const getApprovedProviders = async (id: string) => {
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

export const approveProviderApplication = async (id: string) => {
  const token = localStorage.getItem("enrollai-org-user");

  if (!token) {
    throw new Error("Authentication token not found");
  }
  try {
    const response = await axios.put(
      `${VITE_API_BASE_URL}/organizations/approve/${id}`,

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

export const declineProviderApplication = async (id: string) => {
  const token = localStorage.getItem("enrollai-org-user");

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
