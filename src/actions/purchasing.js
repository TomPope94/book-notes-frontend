import {
  UPDATE_ITEM,
  REMOVE_ITEM,
  GET_SLOTS_COUNT,
  RECALC_BASKET
} from "actions/types";
import { API } from "aws-amplify";

export const countBooks = () => async dispatch => {
  try {
    const res = await API.get("prod", "/books");
    const bookCount = res.length;

    dispatch({
      type: GET_SLOTS_COUNT,
      payload: bookCount
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateQuants = newProdsSelected => async dispatch => {
  try {
    await dispatch(countProducts(newProdsSelected));

    // dispatch({
    //   type: UPDATE_ITEM,
    //   payload: newProdsSelected
    // });
  } catch (err) {
    console.error(err);
  }
};

export const countProducts = newSlots => async dispatch => {
  try {
    const basketVal = (newSlots / 2) * (2 * 0.99 + (newSlots - 1) * -0.1);

    dispatch({
      type: RECALC_BASKET,
      payload: {
        slotsInBasket: newSlots,
        basketTotal: Math.round(basketVal * 100) / 100
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const startPayIntent = details => async dispatch => {
  try {
    const secret = await API.post("prod", "/billing/start", {
      body: details
    });
    // debugger;
    return secret;
  } catch (err) {
    console.error(err);
  }
};
