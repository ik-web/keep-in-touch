import { updateOnlineStatus } from "./handleOnlineStatus";
import { getUser } from "./handleUsers";

export const getProfile = (userId, profileId) => {
  const user = getUser(+profileId);

  if (user) {
    updateOnlineStatus(userId);

    const { id, name, avatar, status, city, about, wallpaper } = user;
    const profile = {
      id,
      name,
      avatar,
      status,
      city,
      about,
      wallpaper
    }
      
    return {data: profile, statusCode: 200};
  }
};

export const putProfileStatus = (userId, body) => {
  updateOnlineStatus(userId);

  const { status } = body;
  const user = getUser(userId);

  if (user) {
    user.status = status;

    return {statusCode: 200, data: status};
  }
};
