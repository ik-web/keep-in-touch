import server from "../mockBackend/mockServer/mockServer";
import { getUserKey } from "./authAPI";

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
