import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
};

export const signin = createAsyncThunk(
  "auth/signin",
  async (user, thunkAPI) => {
    const res = await axios.post("http://127.0.0.1:8000/signin", user);
    return res.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state) => {
      console.log("signup");
    },
    signout: (state) => {
      console.log("signout");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { signup, signout } = authSlice.actions;

export default authSlice.reducer;
