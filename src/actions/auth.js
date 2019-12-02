import {
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
<<<<<<< HEAD
  LOGOUT,
  CLEAR_PROFILE
} from "./types";
import { Auth } from "aws-amplify";

export const loadUser = () => async dispatch => {
  try {
    await Auth.currentAuthenticatedUser();
    dispatch({
      type: USER_LOADED
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
=======
  LOGOUT
} from 'actions/types';
import { Auth } from 'aws-amplify';

export const loadUser = () => async dispatch => {
  if (Auth.currentUserInfo) {
    try {
      dispatch({
        type: USER_LOADED
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
>>>>>>> af1e751e0e6ac6850b74cf93b64649b94e69a66a
  }
};

export const registerUser = (email, password) => async dispatch => {
  try {
    await Auth.signUp(email, password);

    dispatch({
      type: REGISTER_SUCCESS
    });

    // dispatch(loadUser());
  } catch (err) {
    const errors = err.message; // this will be changed for an error message in app/redux
    console.error(errors);
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  try {
    await Auth.signIn(email, password);

    dispatch({
      type: LOGIN_SUCCESS
    });
  } catch (e) {
    alert(e.message);

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout/Clear Profile
export const logout = () => async dispatch => {
  try {
    await Auth.signOut({ global: true });

    dispatch({ type: LOGOUT });
  } catch (err) {
    console.error(err.message);
  }
};
