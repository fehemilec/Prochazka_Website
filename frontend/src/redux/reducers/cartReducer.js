import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
      case actionTypes.CART_SAVE_BILLING_ADDRESS:
        return{
          ...state,
          billingAddress: action.payload
        };
        case actionTypes.CART_SAVE_SHIPPING_ADDRESS:
        return{
          ...state,
          shippingAddress: action.payload
        };
        case actionTypes.CART_EMPTY:
      return { ...state, error: '', cartItems: [] };
        
    default:
      return state;
  }
};