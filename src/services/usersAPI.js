import { server } from "api/mockServer";
import { getUserKey } from "./utils";

export const usersAPI = {
  fetchUsers(page) {
    return server.get(`users/${page}`, getUserKey());
  }
};
