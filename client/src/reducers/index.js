import { combineReducers } from 'redux';
import users from './users';
import flash from './flash';
import posts from './posts';
import user from './user';

const rootReducer = combineReducers({
  user,
  users,
  posts,
  flash
});

export default rootReducer;
