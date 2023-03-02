import userData from '../../data/userData';
import postData from '../../data/postData';
import { handleDataPage } from './handleDataPage';
import { updateOnlineStatus } from './handleOnlineStatus';

export const handlePost = (post, users) => ({
  id: post.id,
  userId: post.userId,
  authorName: users.find((user) => user.id === post.userId).name,
  authorAvatar: users.find((user) => user.id === post.userId).avatar,
  text: post.text,
  likes: post.likes,
});

export const getPosts = (userId, page = 1, length = 15) => {
  updateOnlineStatus(userId);

  const postsPage = handleDataPage(postData, page, length);
  postsPage.items = postsPage.items
    .map((post) => handlePost(post, userData));

  return {
    data: postsPage,
    statusCode: 200,
  };
};

export const getProfilePosts = (userId, profileId, length = 6) => {
  updateOnlineStatus(userId);

  const profilePosts = postData
    .filter((post) => post.userId === +profileId)
    .map((post) => handlePost(post, userData));

  return {
    data: handleDataPage(profilePosts, 1, length),
    statusCode: 200,
  };
};

export const postNewPost = (userId, body) => {
  updateOnlineStatus(userId);
  const { text } = body;
  const newPostId = postData.length ? postData[postData.length - 1].id + 1 : 1;
  const newPost = {
    id: newPostId,
    userId,
    text,
    likes: 0,
  };

  postData.push(newPost);

  const getNewPostFromData = () => {
    return postData.find(post => post.id === newPostId);
  };
  
  const data = handlePost(getNewPostFromData(), userData);

  return { statusCode: 200, data };
};
