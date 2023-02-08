import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { useAuthSelector } from 'store/selectors';

import classes from './MessageItem.module.scss';
import { SmallAvatar } from 'components/UI';

export const MessageItem = ({ message }) => {
  const {
    authorId,
    authorAvatar,
    message: messageText
  } = message;
  const { user } = useAuthSelector();
  const authorIsAuthUser = authorId === user.id;

  return (
    <li className={
      classNames(
        classes.message, 
        {[classes.message_isAuthUser]: authorIsAuthUser}
      )}
    >
      <NavLink to={`/profile/${authorId}`}>
        <SmallAvatar src={authorAvatar} styles={classes.message__author} />
      </NavLink>

      <div 
        className={
          classNames(
            classes.message__text,
            {[classes.message__text_isAuthUser]: authorIsAuthUser}
        )}
      >
        {messageText}
      </div>
    </li>
  );
};
