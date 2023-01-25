import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileAPI } from "services/profileAPI";

export const fetchOnlineStatus = createAsyncThunk(
  "onlineStatus/fetchOnlineStatus",
  async (id, thunkAPI) => {
    try {
      const response = await profileAPI.fetchOnlineStatus(id);
      if (response.statusCode === 200) {
        return response.data;
      }

      throw new Error("404 not found");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
