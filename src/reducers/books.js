import {
  GET_ALL_BOOKS,
  GET_BOOK,
  DELETE_BOOK,
  ADD_BOOK,
  EDIT_BOOK,
  GET_DAILY_TRACKING,
  ADD_DAILY_TRACKING
} from 'actions/types';

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
    case EDIT_BOOK:
      return {
        ...state,
        selectedBook: { ...state.selectedBook, ...payload }
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.bookId !== payload)
      };
    case GET_DAILY_TRACKING:
      return {
        ...state,
        selectedBook: { ...state.selectedBook, tracking: payload }
      };
    case ADD_DAILY_TRACKING:
      const trackingData = state.selectedBook.tracking.filter(
        day => day.date !== payload.date
      );

      return {
        ...state,
        selectedBook: {
          ...state.selectedBook,
          tracking: [...trackingData, payload]
        }
      };
    default:
      return state;
  }
}
