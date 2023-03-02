import { server } from "mockBackend/server";
import { getUserKey } from "./utils";

export const followAPI = {
  fetchFollowItems() {
    return server.get('follow', getUserKey());
  },

  follow(followItemId) {
    return server.post('follow', { followItemId }, getUserKey());
  },
  
  unfollow(userId) {
    return server.delete(`unfollow/${ userId }`, getUserKey());
  }
};
