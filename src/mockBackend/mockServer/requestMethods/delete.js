import { deleteFollow } from "../handlers/handleFollow";

const methodDelete = (request, userKey) => {
  const requestParts = request.split('/');
  const endpoint = requestParts[0];
  const queryParameters = requestParts.slice(1);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (endpoint) {
        case "unfollow":
          resolve(deleteFollow(userKey, ...queryParameters));
          break;

        default:
          reject("404 (not found)");
      }
    }, 334);
  });
};

export default methodDelete;
