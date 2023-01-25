import methodDelete from "./methods/delete";
import methodPut from "./methods/put";
import methodPost from "./methods/post";
import methodGet from "./methods/get";

export const server = {
  get: methodGet,
  post: methodPost,
  put: methodPut,
  delete: methodDelete
};
