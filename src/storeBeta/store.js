import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer/AuthSlice";

const rootReducer = combineReducers({
  authReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
