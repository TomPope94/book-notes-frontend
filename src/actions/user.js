import { GET_USER } from "actions/types";
import { Auth } from "aws-amplify";

export const getUser = () => async dispatch => {
  try {
    const user = await Auth.currentAuthenticatedUser();

    dispatch({
      type: GET_USER,
      payload: user.attributes
    });
  } catch (err) {
    console.error(err);
  }
};
