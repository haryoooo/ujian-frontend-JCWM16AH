import {
    ADD_CART,
    DELETE_ALL_CART,
    DELETE_CART,
    EDIT_CART,
    SET_CART
  } from "./actionType";
  import axios from "axios";
  import { url } from "../../urlConfig";
  
  export function setCart(data) {
    return {
      type: SET_CART,
      payload: data,
    };
  }
  
  export function addCart(data) {
    return {
      type: ADD_CART,
      payload: data,
    };
  }
  
  export function deleteCart(data) {
    return {
      type: DELETE_CART,
      payload: data,
    };
  }
  
  export function deleteAllCart() {
    return {
      type: DELETE_ALL_CART,
      payload: [],
    };
  }
  
  export function editCart(data) {
    return {
      type: EDIT_CART,
      payload: data,
    };
  }
  
  export function fetchCart() {
    return (dispatch) => {
      axios.get(`${url}/carts`).then((product) => {
        dispatch(setCart(product.data));
      });
    };
  }
  
  export function removeCart(id) {
    return (dispatch) => {
      axios.delete(`${url}/carts/${id}`).then((cart) => {
        dispatch(deleteCart(id));
      });
    };
  }
  
  export function editTheCart(data) {
    return (dispatch) => {
      axios.put(`${url}/carts/${data.id}`, data).then((cart) => {
        dispatch(editCart(cart.data));
      });
    };
  }
  