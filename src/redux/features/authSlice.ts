/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Redux slice for managing authentication state.
 * Uses createSlice from @reduxjs/toolkit for reducer creation and state management.
 */

import { createSlice } from "@reduxjs/toolkit";

export type User = {
  fullName: string;
  email: string;
  workEmail: string;
  isVerified: boolean;
  professionalTitle: string;
  password: string;
  accountType: "super_admin" | "organization" | "provider";
  organization?: any;
  data: any;
  userId: string;
  profileStatus: number;
  organizationName: string;
  profilePicture: string;
  id: string;
  administratorFullName: string;
  createdAt: string;
};

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean | null;
  accountType: string;
}

// Function to safely parse the local storage item or default to false
const getIsAuthenticatedFromLocalStorage = () => {
  const item = localStorage.getItem("isAuthenticated");
  if (item === null) return false; // Default value if nothing is found
  try {
    return JSON.parse(item);
  } catch {
    return false;
  }
};

const initialState: AuthState = {
  user: null, // User object
  isAuthenticated: getIsAuthenticatedFromLocalStorage(),
  accountType: "provider",
};

// Create the auth slice using createSlice
const authSlice = createSlice({
  name: "auth", // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer to set user credentials
    setCredentials: (state, action) => {
      state.user = action.payload;
    },

    // Reducer to set authentication status and update localStorage
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      // localStorage.setItem(
      //   "isAuthenticated",
      //   JSON.stringify(state.isAuthenticated)
      // );
    },
    setAccountType: (state, action) => {
      state.accountType = action.payload;
    },
    // Reducer to log out user and update authentication status in localStorage
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // localStorage.setItem(
      //   "isAuthenticated",
      //   JSON.stringify(state.isAuthenticated)
      // );
    },
  },
});

// Export action creators for the setCredentials, setIsAuthenticated, and logout reducers
export const { setCredentials, setIsAuthenticated, logout, setAccountType } =
  authSlice.actions;

// Export the reducer for use in the Redux store
export default authSlice.reducer;
