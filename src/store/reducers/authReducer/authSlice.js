import { createSlice } from "@reduxjs/toolkit";

import { fetchAuth } from "./authActionCreators";
import { getInitialUser, userInStorage } from "store/utils";

const initialState = {
  user: getInitialUser(),
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.user = action.payload;
      userInStorage.set(action.payload);
    });

    builder.addCase(fetchAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
