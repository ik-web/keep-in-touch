import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import classes from './Message.module.scss';

export const Message = ({ message, authUser }) => {
  const isAuthUser = message.authorId === authUser.id;

  return (
    <article className={
      classNames(
        classes.message, 
        {[classes.message_isAuthUser]: isAuthUser}
      )}
    >
      <NavLink to={`/profile/${message.authorId}`}>
        <img 
          src={message.authorAvatar} 
          alt='User avatar' 
          className={classes.message__author}
        />
      </NavLink>

      <div 
        className={
          classNames(
            classes.message__text,
            {[classes.message__text_isAuthUser]: isAuthUser}
        )}
      >
        {message.message}
      </div>
    </article>
  );
};
