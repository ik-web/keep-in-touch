import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer/authSlice";
import followReducer from "./reducers/followReducer/followSlice";
import postReducer from "./reducers/postReducer/postSlice";

const rootReducer = combineReducers({
  authReducer,
  followReducer,
  postReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
