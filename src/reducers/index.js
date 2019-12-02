import { combineReducers } from "redux";
import auth from "reducers/auth";
import books from "reducers/books";

export default combineReducers({
  auth,
  books
});
