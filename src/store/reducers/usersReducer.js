const SET_USERS = 'SET_USERS';

const initialState = {
  users: [],
  pages: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const pageLength = 10;
      const totalPages = Math.ceil(action.totalCount / pageLength);
      const pages = [];
      
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      
      return {
        users: action.users,
        pages,
      }

    default:
      return state;
  };
}

export const setUsersAC = (users,totalCount) => ({
  type: SET_USERS,
  users,
  totalCount
});

export default usersReducer;
