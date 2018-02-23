import { merge } from 'lodash';

import { ADD_USERS } from "../actions/users_actions";

const UsersReducer = ( state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case ADD_USERS:
      // debugger
      return action.users;
    default:
      return state;
  }
}
export default UsersReducer;
