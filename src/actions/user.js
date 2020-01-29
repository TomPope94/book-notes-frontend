import { GET_USER, UPDATE_ATTRIBUTES } from "actions/types";
import { Auth, API } from "aws-amplify";

export const getUser = () => async dispatch => {
  try {
    const userData = await API.get("prod", `/users`);

    dispatch({
      type: GET_USER,
      payload: userData
    });
  } catch (err) {
    // debugger;
    console.error(err.response);
  }
};

export const updateUser = userDetails => async dispatch => {
  try {
    // exclude userId as that will be pulled from the requestContext
    const { userId, ...APIBody } = userDetails;
    // debugger;
    await API.put("prod", "/users", {
      body: APIBody
    });

    dispatch({
      type: UPDATE_ATTRIBUTES,
      payload: APIBody
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const createUser = email => async dispatch => {
  try {
    await API.post("prod", "/users", {
      body: {
        email: email
      }
    });
  } catch (err) {
    console.error(err.message);
  }
};
