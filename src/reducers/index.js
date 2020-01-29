import { combineReducers } from "redux";
import auth from "reducers/auth";
import books from "reducers/books";
import user from "reducers/user";
import purchasing from "reducers/purchasing";

export default combineReducers({
  auth,
  books,
  user,
  purchasing
});
