import { GET_ALL_BOOKS, GET_BOOK, DELETE_BOOK, ADD_BOOK } from 'actions/types';

const initialState = {
  books: [],
  selectedBook: null
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return {
        ...state,
        books: { ...state.books, payload }
      };
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
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.bookId !== payload)
      };
    default:
      return state;
  }
}
