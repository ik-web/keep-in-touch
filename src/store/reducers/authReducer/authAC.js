import { createAsyncThunk } from "@reduxjs/toolkit";

import { authAPI } from "services/authAPI";
import { userInStorage } from "store/utils";

export const fetchAuth = createAsyncThunk(
  "auth/fetchUser",
  async (authForm, thunkAPI) => {
    try {
      const response = await authAPI.authorization(authForm);

      if (response.statusCode === 200) {
        userInStorage.set(response.data);
        return response.data;
      } else {
        throw new Error("403 Forbidden");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(userInStorage.remove())
      }, 334);
    });

    try {
      const response = await request;
      return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
