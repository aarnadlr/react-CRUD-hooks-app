import { USERS_FETCHED, FETCH_USERS, ADD_USER } from '../constants/constants';

const initialState = {};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      return action.payload;
    case ADD_USER:
      return state;
    default:
      return state;
  }
};
