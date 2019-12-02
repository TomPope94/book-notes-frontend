import { GET_ALL_BOOKS, GET_BOOK } from "actions/types";

const initialState = {
  books: [],
  selectedBook: null
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        books: payload
      };
    case GET_BOOK:
      return {
        ...state,
        selectedBook: payload
      };
    default:
      return state;
  }
}
