import {
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from 'actions/types';
import { Auth } from 'aws-amplify';

export const loadUser = () => async dispatch => {
  try {
    await Auth.currentSession();
    dispatch({
      type: USER_LOADED
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
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

export const forgotPassword = username => async dispatch => {
  try {
    await Auth.forgotPassword(username);
  } catch (err) {
    console.error(err.message);
  }
};

export const resetPassword = (
  username,
  code,
  new_password
) => async dispatch => {
  try {
    const data = await Auth.forgotPasswordSubmit(username, code, new_password);
    debugger;
  } catch (err) {
    console.error(err.message);
  }
};
