import { server } from "mockBackend/server";
import { getUserKey } from "./utils";

export const followAPI = {
  fetchFollow() {
    return server.get('follow', getUserKey());
  },

  follow(followData) {
    return server.post('follow', followData, getUserKey());
  },
  
  unfollow(id) {
    return server.delete(`unfollow/${id}`, getUserKey());
  }
};
