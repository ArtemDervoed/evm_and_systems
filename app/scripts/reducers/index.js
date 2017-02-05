/* eslint-disable no-unused-vars */
export const index = (state = {user: 'new user'}, action) => {
  switch (action.type) {
    case 'FETCH_STUDYS':
      return {...state, user: action.payload};
    case 'LOGOUT':
      return {...state, user: action.payload};
    default:
      return state;
  }
};
