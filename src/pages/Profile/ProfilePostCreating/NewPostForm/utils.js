export const createNewPost = (user, text) => ({
  id: Date.now(),
  authorAvatar: user.avatar,
  authorName: user.name,
  text: text.trim(),
  likes: 0,
});
