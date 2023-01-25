import { createAsyncThunk } from "@reduxjs/toolkit";
import { postAPI } from "services/postAPI";

export const fetchAllPosts = createAsyncThunk(
  "post/fetchAllPosts",
  async (_, thunkAPI) => {
    try {
      const response = await postAPI.fetchAllPosts();

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
