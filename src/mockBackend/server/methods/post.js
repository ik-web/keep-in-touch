import { handleAuth } from "../handlers/handleAuth";
import { postNewMessage } from "../handlers/handleDialog";
import { postFollow } from "../handlers/handleFollow";
import { postNewPost } from "../handlers/handlePosts";

const methodPost = (request, body, userKey) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (request) {
        case "auth":
          resolve(handleAuth(body));
          break;

        case "post":
          resolve(postNewPost(userKey, body));
          break;

        case "message":
          resolve(postNewMessage(userKey, body));
          break;

        case "follow":
          resolve(postFollow(userKey, body));
          break;

        default:
          reject("404 (not found)");
      }
    }, 225);
  });
};

export default methodPost;
