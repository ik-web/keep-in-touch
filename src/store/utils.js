export const userInStorage = {
  get() {
    return JSON.parse(sessionStorage.getItem("user"));
  },

  set(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  },

  remove() {
    sessionStorage.removeItem("user");
    return null;
  },

  getId() {
    if (this.get()) return this.get().id;
  },

  present() {
    return !!this.get();
  },
};

export const getInitialUser = () => {
  return userInStorage.get() || {};
};

export const resetState = () => (dispatch) => {
  userInStorage.remove();

  // dispatch(setAuthUser(getInitialAuthUser()));
  // dispatch(setFollowings([], null, 0));
  // dispatch(setPosts([], null));
  // dispatch(setDialogs([], null));
  // dispatch(setUsers([], null, 0));
  // dispatch(setProfile({}));
  // dispatch(updateNewPostText(''));
  // dispatch(setProfilePosts([], null));
};
