import { server } from "mockBackend/server";
import { getUserKey } from "./utils";

export const userAPI = {
  fetchUsers(page) {
    return server.get(`users/${page}`, getUserKey());
  }
};
