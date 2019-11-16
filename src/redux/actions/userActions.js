import axios from 'axios';
import _ from 'lodash';
// import {useDispatch} from 'react-redux'
import {
  DATA_CONVERTED_TO_OBJ_AND_SENT_TO_REDUCER,
  // USERS_FETCHED_SENT_TO_CONVERSION,
  // FETCH_USERS,
  DATA_CONVERTED_BACK_TO_ARRAY,
  ADD_USER
} from '../constants/constants';

import { store } from '../store';

const convertObjToArray = objOfObjs => {
  let arrofObjs2 = Object.values(objOfObjs);

  store.dispatch({
    type: DATA_CONVERTED_BACK_TO_ARRAY,
    payload: arrofObjs2
  });
};

const convertArrayToObj = dataObject => {
  let objOfObjs = _.mapKeys(dataObject.users, '_id');
  store.dispatch({
    type: '4. DATA_ARR_CONVERTED_TO_OBJ'
    // payload: objOfObjs
  });

  store.dispatch({
    type: '5. DATA_OBJ GETTING SENT TO BE CONV BACK TO ARR'
    // payload: objOfObjs
  });

  convertObjToArray(objOfObjs);
};

//THUNK
export const fetchUsers = () => (dispatch, getState) => {
  dispatch({ type: '1. USERS_BEING_FETCHED' });

  axios
    .get('/api/users')

    .then(res => {
      // console.log("res.data:", res.data)

      dispatch({
        type: '2. USERS_FETCHED'
        // Send to the reducer: the whole res.data OBJECT
        // res.data === { users: [ {document1}, {document2} ] }
        // payload: res.data
      });

      dispatch({
        type: '3. USERS_ARR_BEING SENT TO GET CONV TO OBJ'
        // Send to the reducer: the whole res.data OBJECT
        // res.data === { users: [ {document1}, {document2} ] }
        // payload: res.data
      });

      convertArrayToObj(res.data);
    })

    .catch(e => {
      // dispatch(returnErrors(e.response.data, e.response.status));
      console.log('ERROR DATA: ', e.response.data);
      console.log('ERROR STATUS: ', e.response.status);

      dispatch({
        type: 'USERS_FETCH_ERROR'
      });
    });
};

export const addUser = () => {
  return {
    type: ADD_USER
  };
};
