/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  form: {
    [key: string]: string | number | Date | null | undefined;
  };
  lists: any[];
}

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    form: {},
    lists: [],
  } as FormState,
  reducers: {
    updateForm(state, action: PayloadAction<Partial<FormState["form"]>>) {
      state.form = { ...state.form, ...action.payload };
    },

    setApplicationList(state, action: PayloadAction<any[]>) {
      state.lists = action.payload;
    },
  },
});

export const { updateForm, setApplicationList } = applicationSlice.actions;
export default applicationSlice.reducer;
