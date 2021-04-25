import { SET_LOADING_PRODUCTS, SET_PRODUCTS } from "./actionType";
import axios from "axios";
import { url } from "../../urlConfig";

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}

export function isLoadingProducts(isLoadingProducts) {
  return {
    type: SET_LOADING_PRODUCTS,
    payload: isLoadingProducts,
  };
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(isLoadingProducts(true));
      axios.get(`${url}/products`).then((res) => {
        dispatch(isLoadingProducts(false));
        dispatch(setProducts(res.data));
      });
    };
  };
