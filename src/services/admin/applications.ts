/* eslint-disable @typescript-eslint/no-explicit-any */

import { handleError } from "../error";
import axiosInstance from "..";

// Get (All, Imcoming, Declined & Approved) Applications from Providers Based on their Status (Admin Route)

export const getAllApplicationsBasedOnStatus = async (
  page = 1,
  size = 10,
  status: string
) => {
  if (!status) {
    throw new Error("Status is required");
  }

  try {
    const response = await axiosInstance.get(`/admin/applications/all`, {
      params: { status, page, size, order_by: "desc" },
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

// Get Stats of Providers Applications in Admin Dashboard
export const getApplicationStats = async () => {
  try {
    const response = await axiosInstance.get(
      `/admin/application-stats`,

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

// Get All Admin Users   (FE: Admin Route)
export const getAllAdmins = async (page = 1, size = 10) => {
  try {
    const response = await axiosInstance.get(
      `/admin/all`,

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
    return handleError(error);
  }
};

// Get All Organizations Users   (FE: Admin Route)
export const getAllOrganizations = async (page = 1, size = 10) => {
  try {
    const response = await axiosInstance.get(
      `/admin/credentialing-organizations`,

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
    return handleError(error);
  }
};

// Get All Providers Users   (FE: Admin Route)
export const getAllProviders = async (page = 1, size = 10) => {
  try {
    const response = await axiosInstance.get(`/admin/providers`, {
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
  try {
    const response = await axiosInstance.put(
      `/admin/change-account-status`,
      {},
      {
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
  try {
    const response = await axiosInstance.delete(
      `/admin/delete-provider-or-organization`,
      {
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
