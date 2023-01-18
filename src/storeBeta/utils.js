export const authUserInStorage = {
  get() {
    return JSON.parse(sessionStorage.getItem("authUser"));
  },

  set(user) {
    sessionStorage.setItem("authUser", JSON.stringify(user));
  },

  remove() {
    sessionStorage.removeItem("authUser");
    return null;
  },

  getId() {
    if (this.get()) return this.get().id;
  },

  present() {
    return !!this.get();
  },
};

export const getInitialAuthUser = () => {
  return authUserInStorage.get() || {};
};

export const resetState = () => (dispatch) => {
  authUserInStorage.remove();

  // dispatch(setAuthUser(getInitialAuthUser()));
  // dispatch(setFollowings([], null, 0));
  // dispatch(setPosts([], null));
  // dispatch(setDialogs([], null));
  // dispatch(setUsers([], null, 0));
  // dispatch(setProfile({}));
  // dispatch(updateNewPostText(''));
  // dispatch(setProfilePosts([], null));
};
