import {
    ADD_CART,
    EDIT_CART,
    DELETE_CART,
    SET_CART,
    DELETE_ALL_CART
  } from "../action/actionType";
  
  const initialState = {
    carts: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_CART: {
        return {
          ...state,
          carts: state.carts.concat(action.payload),
        };
      }
  
      case EDIT_CART: {
        const index = state.carts.findIndex(
          (cart) => cart.id === action.payload.id
        );
        const newCart = [...state.carts];
        newCart[index] = action.payload
  
        return {
          ...state,
          carts: newCart,
        };
      }
  
      case SET_CART: {
        return {
          carts: action.payload,
        };
      }

      case DELETE_CART: {
        return {
          ...state,
          carts: state.carts.filter((cart) => cart.id !== action.payload),
        };
      }

      case DELETE_ALL_CART: {
        return {
          ...state,
          carts: [],
        };
      }
  
      default:
        return {
          ...state,
        };
    }
  };
  