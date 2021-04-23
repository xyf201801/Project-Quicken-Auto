import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

// In state object there will be cartItems, which will be an array
//because you can have more than one item int he cart
//passing in the action after
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      //x.product is the id, here we are checking if the item already exist
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          //if the current iteration of the current ID is equal to the
          //exesting items
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          // if it does not exists then we spread it to with the current items
          //which is ...state.cartItems, and add the new item which is item
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
