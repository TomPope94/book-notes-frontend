import { combineReducers } from "redux";
import auth from "reducers/auth";
import books from "reducers/books";
import user from "reducers/user";

export default combineReducers({
  auth,
  books,
  user
});
