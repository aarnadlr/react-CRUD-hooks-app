import axios from 'axios'

import { FETCH_USERS, ADD_USER } from '../constants/constants';


//THUNK
export const fetchUsers = () => (dispatch, getState) => {

  dispatch({ type: "USERS_BEING_FETCHED" });

  axios
    .get('/api/users')

    .then(res =>
      dispatch({
        type: "USERS_FETCHED",
        // Send to the reducer: the whole user object AND the token
        payload: res.data
      })
    )

    .catch(e => {
      // dispatch(returnErrors(e.response.data, e.response.status));
      console.log("ERROR DATA: ", e.response.data)
      console.log("ERROR STATUS: ", e.response.status);

      dispatch({
        type: "USERS_FETCH_ERROR"
      });
    });
};


export const addUser = () => {
  return {
    type: ADD_USER
  };
};
