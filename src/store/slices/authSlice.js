import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state) => {
      console.log("signin");
    },
    signup: (state) => {
      console.log("signup");
    },
    signout: (state) => {
      console.log("signout");
    },
  },
});

export const { signin, signup, signout } = authSlice.actions;

export default authSlice.reducer;
