import {DATA_CONVERTED_BACK_TO_ARRAY, DATA_CONVERTED_TO_OBJ_AND_SENT_TO_REDUCER, USERS_FETCHED, FETCH_USERS, ADD_USER } from '../constants/constants';

const initialState = {};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case DATA_CONVERTED_TO_OBJ_AND_SENT_TO_REDUCER:
    //   return action.payload;
    case DATA_CONVERTED_BACK_TO_ARRAY:
      return action.payload;
    // case USERS_FETCHED:
    //   return action.payload;
    case ADD_USER:
      return state;
    default:
      return state;
  }
};
