import classes from "./PostList.module.scss";
import { Post } from "components";

export const PostList = ({ posts }) => {
  return (
    <div className={classes.postList}>
      {posts.map((post) => (
        <div className={classes.postList__item} key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};
