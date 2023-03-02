import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { useFollowSelector } from 'store/selectors';
import {
  addFollowLoadingItem,
  follow,
  unfollow
} from 'store/reducers';

import classes from './UserCard.module.scss';
import { CustomButton } from 'components/UI';
import { OnlineStatus } from 'components';


export const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { followItems, followLoading } = useFollowSelector();
  const isFollowing = !!followItems.find(f => f.id === user.id);
  const isDisabled = followLoading.includes(user.id);

  const handleFollow = () => {
    dispatch(addFollowLoadingItem(user.id));
    
    if (isFollowing) {
      dispatch(unfollow(user.id));
    } else {
      dispatch(follow(user.id));
    };
  };

  return (
    <div className={classes.userCard}>
      <NavLink to={`/profile/${user.id}`}>
        <img
          src={user.avatar}
          alt="User avatar"
          className={classes.userCard__avatar}
        />
      </NavLink>

      <h4 className={classes.userCard__name}>
        {user.name}
      </h4>

      <OnlineStatus onlineStatus={user.isOnline} />

      <div className={classes.userCard__city}>
        {user.city}
      </div>

      <CustomButton
        name={isFollowing ? 'Unfollow' : 'Follow'}
        onClick={handleFollow}
        disabled={isDisabled}
        className={classNames(
          '',
          {[classes.userCard__button_unfollow]: isFollowing}
        )}
      />

      <CustomButton
        name='Message'
        onClick={() => console.log('Send message')}
      />
    </div>
  );
};
