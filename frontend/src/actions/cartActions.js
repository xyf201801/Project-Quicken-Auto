import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

//getState allows to get entire state tree
//ex: anything sush as ProductList, ProductDetails from the store.js, we can
//grab that from the getState
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  //this is to display all the information in the cart
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  //once dispatched, we save it to the localStorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//bring in a dispact to dispatch it to the reducer
//getState to get all the items from the cart
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
