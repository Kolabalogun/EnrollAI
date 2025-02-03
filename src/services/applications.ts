/* eslint-disable @typescript-eslint/no-explicit-any */

import { handleError } from "./error";
import axiosInstance from ".";

export const getAllApplicationsForProviders = async (page = 1, size = 10) => {
  try {
    const response = await axiosInstance.get(
      `/organizations/get-organization-applications`,
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

export const getAllApplicationsByUserId = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/application/user/${id}`);
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const getApplicationsById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/application/${id}`);
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const getUsersApplicationsByStatus = async (
  userId: string,
  status: string,
  page = 1,
  size = 10
) => {
  try {
    const response = await axiosInstance.get(
      `/application/user/status/${userId}`,
      {
        params: { status, page, size, order_by: "desc" },
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

export const getApplicationStatBasedOnUserId = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/application/user-stat/${id}`);
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

// Function to Create an Application By the Provider (FE: Provider)
export const createProviderApplication = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post(`/application/apply`, formData);

    console.log(response, "createProviderApplication response");

    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};
// Function to Update an Application By the Provider (FE: Provider)
export const updateProviderApplication = async (formData: any, id: string) => {
  try {
    const response = await axiosInstance.put(`/application/${id}`, formData);

    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};

export const getProviderRecentApplication = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `/application/getrecentapplication/${id}`
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

export const deleteProviderApplication = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/application/${id}`);
    return {
      success: true,
      data: response.data,
      message: "",
    };
  } catch (error: any) {
    return handleError(error);
  }
};
