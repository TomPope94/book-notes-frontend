import {
  GET_ALL_BOOKS,
  GET_BOOK,
  ADD_BOOK,
  EDIT_BOOK,
  GET_DAILY_TRACKING,
  ADD_DAILY_TRACKING,
  EDIT_PLANNED_DATE,
  CHANGE_FILTER,
  RESET_BOOKS,
  SEARCH_SUCCESS
} from "actions/types";

const initialState = {
  books: [],
  selectedBook: null,
  loading: true,
  filter: "bookState",
  searchResults: [],
  error: {}
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        books: payload,
        loading: false
      };
    case GET_BOOK:
    case EDIT_BOOK:
    case EDIT_PLANNED_DATE:
      return {
        ...state,
        selectedBook: { ...state.selectedBook, ...payload },
        loading: false
      };
    // case DELETE_BOOK:
    //   return {
    //     ...state,
    //     books: state.books.filter(book => book.bookId !== payload),
    //     loading: false
    //   };
    case GET_DAILY_TRACKING:
      return {
        ...state,
        selectedBook: { ...state.selectedBook, tracking: payload },
        loading: false
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
        },
        loading: false
      };
    case RESET_BOOKS:
      return {
        ...state,
        loading: true,
        books: []
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: payload
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: payload
      };
    default:
      return state;
  }
}
