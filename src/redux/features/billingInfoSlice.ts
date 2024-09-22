/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billingsInfos: [] as any[],
};

export const billingInfoSlice = createSlice({
  name: "billingInfo",
  initialState,
  reducers: {
    setBillingInfo: (state, action) => {
      const data = action.payload;
      state.billingsInfos = data;
    },
  },
});

export const { setBillingInfo } = billingInfoSlice.actions;

export default billingInfoSlice.reducer;
