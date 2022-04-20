import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
  user: null,
};

export const signin = createAsyncThunk(
  "auth/signin",
  async (user, thunkAPI) => {
    const res = await api.post("/signin", user);
    return res.data;
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (user, thunkAPI) => {
    const res = await api.post("/signup", user);
    return res.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      console.log("signout");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { signout } = authSlice.actions;

export default authSlice.reducer;
