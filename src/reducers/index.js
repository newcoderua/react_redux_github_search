import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import UsersReducer from './users_reducer';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  users: UsersReducer
  // your reducer here
});
