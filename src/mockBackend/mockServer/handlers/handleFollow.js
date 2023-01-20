import users from '../../mockData/users';
import follow from '../../mockData/follow';
import { handleDataPage } from "./handleDataPage";
import { updateOnlineStatus } from './handleOnlineStatus';

export const getRequestFollowId = (userId) => {
  const requestFollowId = follow.find(followItem => (
    followItem.userId === userId
  ));

  if (requestFollowId) {
    return requestFollowId.userFollow
  };

  return null;
};

const getRequestFollow = (userId) => {
  const requestFollowId = getRequestFollowId(userId);

  if (requestFollowId) {
    return users
    .filter(user => requestFollowId.includes(user.id))
    .map(user => ({
      id: user.id,
      name: user.name,
      avatar: user.avatar
    }));
  }

  return null;
}

export const getRequestFollowPage = (userId, page = 1, length = 10) => {
  updateOnlineStatus(userId);

  const requestFollow = getRequestFollow(userId);

  if (requestFollow) {
    return {
      data: handleDataPage(requestFollow, page, length),
      statusCode: 200
    };
  }

  return {
    status: 404,
    message: 'Not found'
  };
};

export const postFollow = (userId, body) => {
  updateOnlineStatus(userId);

  const { newFollowing } = body;
  const followId = getRequestFollowId(userId);

  if (followId) {
    followId.push(newFollowing);

  } else {
    const newFollowItem = {
      id: 1,
      userId: userId,
      userFollow: [newFollowing]
    }

    follow.push(newFollowItem);
  }

  return {statusCode: 200};
};

export const deleteFollow = (userId, unfollowId) => {
  updateOnlineStatus(userId);

  const followingsId = getRequestFollowId(userId);

  if (followingsId) {
    const unfollowIdIndex = followingsId.indexOf(+unfollowId);

    if (unfollowIdIndex !== -1) {
      followingsId.splice(unfollowIdIndex, 1);
    }

    return {statusCode: 200};
  }

  return {statusCode: 404}
};
