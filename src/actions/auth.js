import {
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from 'actions/types';
import { getUser } from 'actions/user';
import { Auth } from 'aws-amplify';

export const loadUser = () => async dispatch => {
  try {
    await Auth.currentSession();
    dispatch(getUser());
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
    await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        'custom:onboard': 'false',
        'custom:bookLimit': '3',
        name: 'NA'
      }
    });

    dispatch({
      type: REGISTER_SUCCESS
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.message; // this will be changed for an error message in app/redux
    console.error(errors);
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  try {
    await Auth.signIn(email, password);
    dispatch(getUser());
    dispatch({
      type: LOGIN_SUCCESS
    });
  } catch (e) {
    console.error(e);

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

export const resetPassword = (username, code, new_password) => async () => {
  try {
    await Auth.forgotPasswordSubmit(username, code, new_password);
  } catch (err) {
    console.error(err.message);
  }
};

export const verifyEmail = (username, code) => async () => {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (err) {
    console.error(err);
  }
};
