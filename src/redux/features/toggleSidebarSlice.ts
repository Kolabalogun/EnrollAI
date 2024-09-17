/**
 * Redux slice for managing the state of the sidebar toggle.
 * Uses createSlice from @reduxjs/toolkit for reducer creation and state management.
 */

import { createSlice } from "@reduxjs/toolkit";

// Initial state for the toggleSidebar slice
const initialState = {
  value: true,
};

// Create the toggleSidebar slice using createSlice
export const toggleSidebarSlice = createSlice({
  name: "toggleSidebar", // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer to set the state value to true (open)
    open: (state) => {
      state.value = true;
    },
    // Reducer to set the state value to false (close)
    close: (state) => {
      state.value = false;
    },
  },
});

// Export action creators for the open and close reducers
export const { open, close } = toggleSidebarSlice.actions;

// Export the reducer for use in the Redux store
export default toggleSidebarSlice.reducer;
