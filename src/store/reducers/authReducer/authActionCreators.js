import { createAsyncThunk } from "@reduxjs/toolkit";

import { authAPI } from "api/authAPI";

export const fetchAuth = createAsyncThunk(
  "auth/fetchUser",
  async (authForm, thunkAPI) => {
    try {
      const response = await authAPI.authorization(authForm);

      if (response.statusCode === 200) {
        return response.data;
      } else {
        throw new Error("403 Forbidden");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
