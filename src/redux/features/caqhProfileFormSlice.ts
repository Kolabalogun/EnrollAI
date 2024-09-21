/* eslint-disable @typescript-eslint/no-explicit-any */

import { CAHQProfileInitialState } from "@/constant/data/cahqprofiledata";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  form: {
    [key: string]: any;
  };
}

const applicationSlice = createSlice({
  name: "cahqProfile",
  initialState: {
    form: CAHQProfileInitialState,
    lists: [],
  } as FormState,
  reducers: {
    updateCAHQForm(state, action: PayloadAction<Partial<FormState["form"]>>) {
      state.form = { ...state.form, ...action.payload };
    },

    resetCAHQForm(state) {
      state.form = { ...CAHQProfileInitialState };
    },
  },
});

export const { updateCAHQForm, resetCAHQForm } = applicationSlice.actions;
export default applicationSlice.reducer;
