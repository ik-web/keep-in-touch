import { userInStorage } from "store/utils";

export const getUserKey = () => userInStorage.getId();
