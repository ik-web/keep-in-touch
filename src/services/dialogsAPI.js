import { server } from "mockBackend/server";
import { getUserKey } from "./utils";

export const dialogsAPI = {
  fetchDialogs() {
    return server.get(`dialogs`, getUserKey());
  },
  
  sendNewMessage(newMessageInfo) {
    return server.post('message', newMessageInfo, getUserKey())
  }
};
