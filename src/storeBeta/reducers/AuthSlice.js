const { createSlice } = require("@reduxjs/toolkit");

const { getInitialAuthUser } = require("storeBeta/utils");

const initialState = {
  authUser: getInitialAuthUser(),
  loading: false,
  error: '',
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  }
});

export default AuthSlice.reducer;
