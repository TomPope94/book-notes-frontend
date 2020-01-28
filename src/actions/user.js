import { GET_USER, UPDATE_ATTRIBUTES } from "actions/types";
import { Auth } from "aws-amplify";

export const getUser = () => async dispatch => {
  try {
    const user = await Auth.currentAuthenticatedUser({ bypassCache: true });

    dispatch({
      type: GET_USER,
      payload: user.attributes
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateAttributes = attributes => async dispatch => {
  try {
    let user = await Auth.currentAuthenticatedUser({ bypassCache: true });

    // find if any of the attributes are not numeric or string
    const attrValues = Object.values(attributes);
    const attrKeys = Object.keys(attributes);
    let formattedAttributes = { ...attributes }; // doing a shallow copy of the original object
    for (let i = 0; i < attrValues.length; i++) {
      if (
        typeof attrValues[i] !== "string" &&
        typeof attrValues[i] !== "number"
      ) {
        formattedAttributes[attrKeys[i]] = attrValues[i].toString();
      }
    }

    await Auth.updateUserAttributes(user, formattedAttributes);

    dispatch({
      type: UPDATE_ATTRIBUTES,
      payload: attributes
    });
  } catch (err) {
    console.error(err.message);
  }
};
