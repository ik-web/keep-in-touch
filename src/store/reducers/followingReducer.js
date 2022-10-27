const SET_FOLLOWINGS = 'SET_FOLLOWINGS';
const ADD_FOLLOWING = 'ADD_FOLLOWING';
const REMOVE_FOLLOWING = 'REMOVE_FOLLOWING';

const initialState = {
  followings: [],
  totalFollowings: null,
  currentPage: 0,
};

const followingReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FOLLOWINGS:

      return {
        ...state,
        followings: action.followings,
        totalFollowings: action.totalFollowings,
        currentPage: action.currentPage,
      }

    case ADD_FOLLOWING:
      console.log('state',state.followings);
      return {
        ...state,
        followings: [ action.following, ...state.followings ]
      }

    case REMOVE_FOLLOWING:

      return {
        ...state,
        followings: state.followings
        .filter(followin => followin.id !== action.userId)
      }

    default:
      return state;
  }
};

export const setFollowings = (
  followings,
  totalFollowings,
  currentPage
) => ({
  type: SET_FOLLOWINGS,
  followings,
  totalFollowings,
  currentPage
});

export const addFollowing = (following) => ({
  type: ADD_FOLLOWING,
  following
});

export const removeFollowing = (userId) => ({
  type: REMOVE_FOLLOWING,
  userId
});

export default followingReducer;