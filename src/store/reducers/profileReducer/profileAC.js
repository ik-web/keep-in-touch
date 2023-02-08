import { createAsyncThunk } from "@reduxjs/toolkit";

import { profileAPI } from "services";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (profileId, thunkAPI) => {
    try {
      const response = await profileAPI.fetchProfile(profileId);

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

export const putProfileStatus = createAsyncThunk(
  "profileStatus/putProfileStatus",
  async (profileStatus, thunkAPI) => {
    try {
      const response = await profileAPI.putProfileStatus(profileStatus);

      if (response.statusCode === 200) {
        return response.data;
      }

      throw new Error("Something went wrong");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
