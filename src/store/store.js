import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  authReducer,
  followReducer,
  onlineStatusReducer,
  postReducer,
  profilePostReducer,
  profileReducer,
  contactReducer,
  dialogReducer,
} from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  follow: followReducer,
  post: postReducer,
  profile: profileReducer,
  profilePosts: profilePostReducer,
  onlineStatus: onlineStatusReducer,
  contact: contactReducer,
  dialog: dialogReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
