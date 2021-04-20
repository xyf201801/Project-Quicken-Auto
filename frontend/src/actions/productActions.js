import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    //dispatch(listProducts()) fires the dispach
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");
    dispatch({
      //dispatch({ type: PRODUCT_LIST_REQUEST });
      //successfully dispached so it enables the PRODUCT_LIST_SUCCESS
      type: PRODUCT_LIST_SUCCESS,
      //passes the data into the payload
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductsDetails = (id) => async (dispatch) => {
  try {
    //dispatch(listProducts()) fires the dispach
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      //dispatch({ type: PRODUCT_DETAILS_REQUEST });
      //successfully dispached so it enables the PRODUCT_DETAILS_SUCCESS
      type: PRODUCT_DETAILS_SUCCESS,
      //passes the data into the payload
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
