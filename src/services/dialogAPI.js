import { server } from "mockBackend/server";
import { getUserKey } from "./utils";

export const dialogAPI = {
  fetchDialog(id) {
    return server.get(`dialog/${id}`, getUserKey());
  },
  
  postNewMessage(newMessage) {
    return server.post('message', newMessage, getUserKey())
  }
};
