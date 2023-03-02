import { createAsyncThunk } from "@reduxjs/toolkit";

import { followAPI } from "services";

export const fetchFollowItems = createAsyncThunk(
  "follow/fetchFollowItems",
  async (_, thunkAPI) => {
    try {
      const response = await followAPI.fetchFollowItems();

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

export const follow = createAsyncThunk(
  "follow/follow",
  async (userId, thunkAPI) => {
    try {
      const response = await followAPI.follow(userId);

      if (response.statusCode === 200) {
        return response.data;
      } else {
        throw new Error("404 not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(userId);
    }
  }
);

export const unfollow = createAsyncThunk(
  "follow/unfollow",
  async (userId, thunkAPI) => {
    try {
      const response = await followAPI.unfollow(userId);

      if (response.statusCode === 200) {
        return userId;
      } else {
        throw new Error("404 not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(userId);
    }
  }
);
