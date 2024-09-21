/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApplicationFormInitialState } from "@/constant/data/applicationsdata";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  form: {
    [key: string]: any;
  };
  lists: any[];
}

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    form: ApplicationFormInitialState,
    lists: [],
  } as FormState,
  reducers: {
    updateForm(state, action: PayloadAction<Partial<FormState["form"]>>) {
      state.form = { ...state.form, ...action.payload };
    },

    resetForm(state) {
      state.form = { ...ApplicationFormInitialState };
    },

    setApplicationList(state, action: PayloadAction<any[]>) {
      state.lists = action.payload;
    },

    resetLists(state) {
      state.lists = [];
    },
  },
});

export const { updateForm, setApplicationList, resetForm, resetLists } =
  applicationSlice.actions;
export default applicationSlice.reducer;
