import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  judge: null,
};

export const judgeSlice = createSlice({
  name: "judge",
  initialState,
  reducers: {
    saveJudge: (state, action) => (state.judge = action.payload),
  },
});

export const { saveJudge } = judgeSlice.actions;
export default judgeSlice.reducer;
