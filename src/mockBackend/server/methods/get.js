import { getContacs } from "../handlers/handleContacs";
import { getDialog } from "../handlers/handleDialog";
import { getRequestFollowPage } from "../handlers/handleFollow";
import { getOnlineStatus } from "../handlers/handleOnlineStatus";
import { getPosts, getProfilePosts } from "../handlers/handlePosts";
import { getProfile } from "../handlers/handleProfile";
import { getUsers } from "../handlers/handleUsers";

const methodGet = (request, userKey) => {
  const requestParts = request.split('/');
  const endpoint = requestParts[0];
  const queryParams = requestParts.slice(1);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (endpoint) {
        case "profile":
          resolve(getProfile(userKey, ...queryParams));
          break;

        case "users":
          resolve(getUsers(userKey, ...queryParams));
          break;

        case "posts":
          resolve(getPosts(userKey, ...queryParams));
          break;

        case "profilePosts":
          resolve(getProfilePosts(userKey, ...queryParams));
          break;

        case "contacts":
          resolve(getContacs(userKey, ...queryParams));
          break;

        case "dialog":
          resolve(getDialog(userKey, ...queryParams));
          break;

        case "follow":
          resolve(getRequestFollowPage(userKey, ...queryParams));
          break;

        case "online":
          resolve(getOnlineStatus(...queryParams));
          break;

        default:
          reject("404 (not found)");
      }
    }, 225);
  });
};

export default methodGet;
