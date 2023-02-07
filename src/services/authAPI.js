import { server } from "mockBackend/server";
import { getUserKey } from "./utils";

export const authAPI = {
  authorization(authInfo) {
    return server.post('auth', authInfo, getUserKey());
  }
};
