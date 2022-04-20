import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import decode from "jwt-decode";
import api from "../api";

const initialState = {
  user: null,
};

const setUser = (token) => {
  const user = decode(token);
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem("token", token);
  return user;
};

export const signin = createAsyncThunk(
  "auth/signin",
  async (user, thunkAPI) => {
    const res = await api.post("/signin", user);
    const _user = setUser(res.data.token);
    return _user;
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
