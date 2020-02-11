import {
  UPDATE_ITEM,
  REMOVE_ITEM,
  GET_SLOTS_COUNT,
  RECALC_BASKET,
  RECALC_BASKET_HOVER
} from 'actions/types';

const initialState = {
  slotsInBasket: 0,
  slotsInBasketHover: 0,
  basketTotal: 0,
  basketTotalHover: 0,
  loading: true,
  slotsAvailable: 0,
  slotsUsed: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SLOTS_COUNT:
      return {
        ...state,
        slotsUsed: payload
      };
    case UPDATE_ITEM:
      return {
        ...state,
        productsSelected: payload
      };
    case RECALC_BASKET:
      return {
        ...state,
        ...payload
      };
    case RECALC_BASKET_HOVER:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
