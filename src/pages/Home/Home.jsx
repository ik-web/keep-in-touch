import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { usePostSelector } from "store/selectors";
import { fetchAllPosts } from "store/reducers";

import classes from "./Home.module.scss";
import { CustomTitle, Loader } from "components/UI";
import { Layout, PostList, PostsContainer } from "components";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = usePostSelector();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <Layout>
      <PostsContainer className={classes.home} dataLoading={loading}>
        {loading
          ? <Loader />
          : posts.length
            ? <PostList posts={posts} />
            : <CustomTitle>There are no posts...</CustomTitle>
        }
      </PostsContainer>
    </Layout>
  );
};
