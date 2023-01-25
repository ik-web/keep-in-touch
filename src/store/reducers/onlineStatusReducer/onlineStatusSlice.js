import { createSlice } from "@reduxjs/toolkit";
import { fetchOnlineStatus } from "./onlineStatusAC";

const initialState = {
  onlineStatus: false,
  loading: false,
  error: "",
};

export const onlineStatusSlice = createSlice({
  name: "onlineStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOnlineStatus.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchOnlineStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.onlineStatus = action.payload;
    });

    builder.addCase(fetchOnlineStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const onlineStatusReducer = onlineStatusSlice.reducer;
