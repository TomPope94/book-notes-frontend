import { GET_ALL_BOOKS } from "actions/types";

const initialState = {
  books: []
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        books: payload
      };
    default:
      return state;
  }
}
