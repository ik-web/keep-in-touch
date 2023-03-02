import userData from '../../data/userData';
import followData from '../../data/followData';
import { handleDataPage } from "./handleDataPage";
import { updateOnlineStatus } from './handleOnlineStatus';
import { getUser } from './handleUsers';

const handleFollowItem = (user) => {
  return {
    id: user.id,
    name: user.name,
    avatar: user.avatar
  }
}

export const getRequestedFollowItems = (userId) => {
  const requestFollow = followData.find(follow => (
    follow.userId === userId
  ));

  if (requestFollow) {
    return requestFollow.followItems
  };

  return null;
};

const handleFollowItems = (userId) => {
  const requestedFollowItems = getRequestedFollowItems(userId);

  if (requestedFollowItems) {
    const handledFollowItems = userData
    .filter(user => requestedFollowItems.includes(user.id))
    .map(user => handleFollowItem(user));

    return handledFollowItems;
  }

  return null;
}

export const getFollowItemsPage = (userId, page = 1, length = 10) => {
  updateOnlineStatus(userId);

  const handledFollowItems = handleFollowItems(userId);

  if (handledFollowItems) {
    return {
      data: handleDataPage(handledFollowItems, page, length),
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
  const { followItemId } = body;
  const requestedFollowItems = getRequestedFollowItems(userId);

  if (requestedFollowItems) {
    requestedFollowItems.push(followItemId);

  } else {
    const newFollowItem = {
      id: 1,
      userId: userId,
      userFollow: [followItemId]
    }

    requestedFollowItems.push(newFollowItem);
  }

  const userForFollow = getUser(followItemId);

  return {statusCode: 200, data: handleFollowItem(userForFollow)};
};

export const deleteFollow = (userId, unfollowId) => {
  updateOnlineStatus(userId);

  const requestFollowItems = getRequestedFollowItems(userId);
  
  if (requestFollowItems) {
    const unfollowIdIndex = requestFollowItems.indexOf(+unfollowId);
    
    if (unfollowIdIndex !== -1) {
      requestFollowItems.splice(unfollowIdIndex, 1);

      return {statusCode: 200, data: unfollowId};
    }
  }

  return {statusCode: 404}
};
