import { GET_USER } from "actions/types";

const initialState = {
  attributes: null,
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        attributes: payload
      };
    default:
      return state;
  }
}
