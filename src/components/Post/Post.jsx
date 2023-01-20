import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Post.module.scss';
import { CustomIcon } from 'components/UI';
import { AvatarLink } from 'components';

export const Post = ({ post }) => {
  const navLinkPath = `/profile/${post.userId}`;

  return (
    <article className={classes.post}> 
      <div className={classes.post__author}>
        <NavLink to={navLinkPath}  className={classes.post__authorContainer}>
          <AvatarLink
            src={post.authorAvatar}
          />
        </NavLink>

        <button className={classes.post__likeBtn}>
          <span className={classes.post__likeIcon}>
            <CustomIcon id='like-icon' />
          </span>

          <span className={classes.post__likesCounter}>
            {post.likes}
          </span>
        </button>
      </div>

      <div className={classes.post__content}>
        <NavLink to={navLinkPath}>
          <h3 className={classes.post__authorName}>
            {post.authorName}:
          </h3>
        </NavLink>

        <p>
          {post.text}
        </p>
      </div>
    </article>
  );
};
