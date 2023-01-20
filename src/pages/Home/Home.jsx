import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { usePostSelector } from "store/selectors";
import { fetchAllPosts } from "store/reducers/postReducer/postActionCreators";

import classes from "./Home.module.scss";
import { CustomHint, Loader } from "components/UI";
import { Layout, Post } from "components";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = usePostSelector();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <Layout>
      <div className={classes.home}>
        {loading
          ? <Loader />
          : posts.length
            ? <div className={classes.home__posts}>
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>

            : <CustomHint>
                There are no posts...
              </CustomHint>
        }
      </div>
    </Layout>
  );
};
