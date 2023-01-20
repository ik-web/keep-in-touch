import server from "../mockBackend/mockServer/mockServer";
import { userInStorage } from "store/utils";

export const getUserKey = () => userInStorage.getId();

export const authAPI = {
  authorization(authInfo) {
    return server.post('auth', authInfo, getUserKey());
  }
};
