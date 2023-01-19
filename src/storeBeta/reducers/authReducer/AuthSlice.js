import { createSlice } from "@reduxjs/toolkit";

import { fetchAuth } from "./actionCreators";
import { getInitialUser, userInStorage } from "storeBeta/utils";

const initialState = {
  user: getInitialUser(),
  loading: false,
  error: "",
};

export const AuthSlice = createSlice({
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
      console.log(action.payload);
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default AuthSlice.reducer;
