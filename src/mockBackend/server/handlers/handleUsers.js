import userData from "../../data/userData";
import { handleDataPage } from "./handleDataPage";
import { checkOnlineStatus, updateOnlineStatus } from "./handleOnlineStatus";

export const getUser = (id) => userData.find((user) => user.id === id);

export const getUsers = (userId, page) => {
  updateOnlineStatus(userId);

  const length = 12;

  const handledUsers = userData
  .filter(user => user.id !== userId)
  .reverse()
  .map(user => ({
    id: user.id,
    name: user.name,
    avatar: user.avatar,
    city: user.city,
    isOnline: checkOnlineStatus(user.id)
  }));

  return {
    data: handleDataPage(handledUsers, +page, length),
    statusCode: 200
  }
};
