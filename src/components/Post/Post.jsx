import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Post.module.scss";
import { CustomIcon, CustomTitle } from "components/UI";
import { LinkProfileAvatar } from "components";

export const Post = ({ post }) => {
  const profilePath = `/profile/${post.userId}`;

  return (
    <article className={classes.post}>
      <div className={classes.post__rightContent}>
        <div>
          <LinkProfileAvatar src={post.authorAvatar} to={profilePath} />
        </div>

        <button className={classes.post__likeBtn}>
          <span className={classes.post__likeIcon}>
            <CustomIcon id="like-icon" />
          </span>

          <span className={classes.post__likesCounter}>{post.likes}</span>
        </button>
      </div>

      <div className={classes.post__leftContent}>
        <NavLink to={profilePath}>
          <CustomTitle tag="h4" align="left">
            {post.authorName}:
          </CustomTitle>
        </NavLink>

        <p>{post.text}</p>
      </div>
    </article>
  );
};
