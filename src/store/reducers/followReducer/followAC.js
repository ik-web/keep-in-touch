import { createAsyncThunk } from "@reduxjs/toolkit";

import { followAPI } from "services";

export const fetchFollow = createAsyncThunk(
  "follow/fetchFollow",
  async (_, thunkAPI) => {
    try {
      const response = await followAPI.fetchFollow();

      if (response.statusCode === 200) {
        return response.data;
      } else {
        throw new Error("404 not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
