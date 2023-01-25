import { useSelector } from "react-redux";

export const useAuthSelector = () => useSelector((state) => state.auth);
export const useFollowSelector = () => useSelector((state) => state.follow);
export const usePostSelector = () => useSelector((state) => state.post);
export const useProfileSelector = () => useSelector((state) => state.profile);

export const useProfileStatusSelector = () =>
  useSelector((state) => state.profileStatus);

export const useOnlineStatusSelector = () =>
  useSelector((state) => state.onlineStatus);

export const useProfilePostsSelector = () =>
  useSelector((state) => state.profilePosts);
