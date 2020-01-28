import { GET_USER } from 'actions/types';

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
    default:
      return state;
  }
}
