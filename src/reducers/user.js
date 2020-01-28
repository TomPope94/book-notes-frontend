import { GET_USER, UPDATE_ATTRIBUTES } from "actions/types";

const initialState = {
  attributes: {
    email_verified: false
  },
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        attributes: payload,
        loading: false
      };
    case UPDATE_ATTRIBUTES:
      return {
        ...state,
        attributes: { ...state.attributes, ...payload },
        loading: false
      };
    default:
      return state;
  }
}
