import { getDialogs } from "../handlers/handleDialogs";
import { getRequestFollowPage } from "../handlers/handleFollow";
import { getOnlineStatus } from "../handlers/handleOnlineStatus";
import { getPosts, getProfilePosts } from "../handlers/handlePosts";
import { getProfile } from "../handlers/handleProfile";
import { getUsers } from "../handlers/handleUsers";

const methodGet = (request, userKey) => {
  const requestParts = request.split('/');
  const endpoint = requestParts[0];
  const queryParameters = requestParts.slice(1);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (endpoint) {
        case "profile":
          resolve(getProfile(userKey, ...queryParameters));
          break;

        case "users":
          resolve(getUsers(userKey, ...queryParameters));
          break;

        case "posts":
          resolve(getPosts(userKey, ...queryParameters));
          break;

        case "profilePosts":
          resolve(getProfilePosts(userKey, ...queryParameters));
          break;

        case "dialogs":
          resolve(getDialogs(userKey, ...queryParameters));
          break;

        case "follow":
          resolve(getRequestFollowPage(userKey, ...queryParameters));
          break;

        case "online":
          resolve(getOnlineStatus(...queryParameters));
          break;

        default:
          reject("404 (not found)");
      }
    }, 225);
  });
};

export default methodGet;
