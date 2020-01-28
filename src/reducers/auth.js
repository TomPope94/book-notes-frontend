import {
  LOGIN_SUCCESS,
  USER_LOADED,
  REGISTER_SUCCESS,
  LOGOUT
} from 'actions/types';

const initialState = {
  isAuthenticated: false,
  loading: true
};

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
