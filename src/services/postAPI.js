import { server } from "api/mockServer";
import { getUserKey } from "./utils";

export const postAPI = {
  fetchAllPosts() {
    return server.get('posts', getUserKey());
  },

  fetchProfilePosts(id) {
    return server.get(`profilePosts/${id}`, getUserKey());
  },

  postNewPost(newPostText) {
    const newPost = {
      text: newPostText
    };

    return server.post('post', newPost, getUserKey());
  }
};
