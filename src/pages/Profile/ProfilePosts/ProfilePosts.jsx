import { useProfilePostsSelector, useProfileSelector } from "store/selectors";

import classes from "./ProfilePosts.module.scss";
import { PostList, PostsContainer } from "components";
import { CustomTitle, Loader } from "components/UI";

export const ProfilePosts = ({ isUserProfile }) => {
  const { posts, loading } = useProfilePostsSelector();
  const { profile } = useProfileSelector();

  return (
    <PostsContainer className={classes.posts}>
      {loading
        ? <Loader />
        : posts.length > 0
            ? <>
                <CustomTitle tag="h3" className={classes.posts__title}>
                  All {isUserProfile ? "my" : `${profile.name}'s` } posts:
                </CustomTitle>

                <PostList posts={posts} />
              </>

            : <CustomTitle tag="h3">
                There are currently no posts...
              </CustomTitle>
      }
    </PostsContainer>
  );
};
