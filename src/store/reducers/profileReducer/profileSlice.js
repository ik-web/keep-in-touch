import { createSlice } from "@reduxjs/toolkit";

import { fetchProfile, putProfileStatus } from "./profileAC";

const initialState = {
  profile: {},
  loading: false,
  error: "",
  isUserProfile: false,
  statusSending: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setIsUserProfile(state, action) {
      state.isUserProfile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
      state.error = "";
    });

    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(putProfileStatus.pending, (state) => {
      state.statusSending = true;
    });

    builder.addCase(putProfileStatus.fulfilled, (state, action) => {
      state.statusSending = false;
      state.profile.status = action.payload;
    });
  },
});

export const {
  setIsUserProfile
} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
