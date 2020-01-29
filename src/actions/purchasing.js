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

export const countProducts = prodsSelected => async dispatch => {
  try {
    const products = Object.values(prodsSelected);
    let value = [];
    let slots = [];
    for (let i = 0; i < products.length; i++) {
      value.push(products[i].price * products[i].quantity);
      slots.push(products[i].slots * products[i].quantity);
    }
    const totalBasketValue = value.reduce((acc, currVal) => acc + currVal);
    const totalBasketSlots = slots.reduce((acc, currVal) => acc + currVal);

    dispatch({
      type: RECALC_BASKET,
      payload: {
        basketTotal: Math.round(totalBasketValue * 100) / 100,
        slotsInBasket: Math.round(totalBasketSlots * 100) / 100
      }
    });
  } catch (err) {
    console.error(err);
  }
};
