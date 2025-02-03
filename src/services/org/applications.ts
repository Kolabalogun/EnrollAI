/* eslint-disable @typescript-eslint/no-explicit-any */

import { handleError } from "../error";
import axiosInstance from "..";

// Create Application for Providers to fill
export const createApplicationOrg = async (formData: any) => {
  try {
    const response = await axiosInstance.post(
      `/organizations/create-application`,
      formData,
      {}
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
  try {
    const response = await axiosInstance.get(
      `/organizations/created-applications`,
      {
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
  if (!id) {
    throw new Error("ID is required");
  }

  try {
    const response = await axiosInstance.put(
      `/organizations/toggle-organization-application-status/${id}`,
      {},
      {}
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
  try {
    const response = await axiosInstance.delete(
      `/organizations/delete/${id}`,
      {}
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
  if (!id) {
    throw new Error("Organization ID is required");
  }

  try {
    const response = await axiosInstance.get(`/organizations/applications`, {
      params: { id, status, page, size, order_by: "desc" },
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

// Get Stats of Providers Applications in Organizations Dashboard
export const getOrganizationApplicationStats = async (
  organizationId: string
) => {
  if (!organizationId) {
    throw new Error("Organization Id not found");
  }
  try {
    const response = await axiosInstance.get(
      `/organizations/${organizationId}/application-stats`,

      {}
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
    const response = await axiosInstance.put(
      `/organizations/update-application/${id}`,
      {},
      {
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
  try {
    const response = await axiosInstance.get(
      `/organizations/get-providers/${id}`,
      {
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
