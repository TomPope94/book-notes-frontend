import { combineReducers } from 'redux';
import auth from 'reducers/auth';
import books from 'reducers/books';
import user from 'reducers/user';
import purchasing from 'reducers/purchasing';
import alert from 'reducers/alert';

export default combineReducers({
  auth,
  books,
  user,
  purchasing,
  alert
});
