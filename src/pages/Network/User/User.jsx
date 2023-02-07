import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './User.module.scss';
import { OnlineStatus } from 'components';

import FollowingButton from 'shared/FollowingButton/FollowingButton';
import MessageButton from 'shared/MessageButton/MessageButton';

export const User = ({ user }) => {
  const isFollowing = null;
  const onFollowingToggler = null;
  const checkFollowingProcess= null;

  return (
    <li className={classes.user}>
      <NavLink to={`/profile/${user.id}`}>
        <img
          src={user.avatar}
          alt="User avatar"
          className={classes.user__avatar}
        />
      </NavLink>

      <h4 className={classes.user__name}>
        {user.name}
      </h4>

      <OnlineStatus onlineStatus={user.isOnline} />

      <div className={classes.user__city}>
        {user.city}
      </div>

      <FollowingButton
        isFollowing={isFollowing}
        onFollowingToggler={onFollowingToggler}
        disabledState={checkFollowingProcess(user.id)}
      />

      <MessageButton />
    </li>
  );
};
