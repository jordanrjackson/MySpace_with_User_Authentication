import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import posts from './posts';
import users from './users';
import 'semantic-ui-css/semantic.min.css';

const rootReducer = combineReducers({
  user,
  posts,
  flash,
  users,
});

export default rootReducer;
