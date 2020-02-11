import {
  UPDATE_ITEM,
  REMOVE_ITEM,
  GET_SLOTS_COUNT,
  RECALC_BASKET,
  RECALC_BASKET_HOVER
} from 'actions/types';
import { API } from 'aws-amplify';

export const countBooks = () => async dispatch => {
  try {
    const res = await API.get('prod', '/books');
    const bookCount = res.length;

    dispatch({
      type: GET_SLOTS_COUNT,
      payload: bookCount
    });
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

export const countProductsHover = newSlots => async dispatch => {
  try {
    const basketVal = (newSlots / 2) * (2 * 0.99 + (newSlots - 1) * -0.1);

    dispatch({
      type: RECALC_BASKET_HOVER,
      payload: {
        slotsInBasketHover: newSlots,
        basketTotalHover: Math.round(basketVal * 100) / 100
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const startPayIntent = details => async dispatch => {
  try {
    const secret = await API.post('prod', '/billing/start', {
      body: details
    });
    // debugger;
    return secret;
  } catch (err) {
    console.error(err);
  }
};
