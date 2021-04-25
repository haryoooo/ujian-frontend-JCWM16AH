import { SET_LOADING_PRODUCTS, SET_PRODUCTS } from '../action/actionType'

const initialState = {
    products: [],
    isLoadingProducts: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {

      case SET_PRODUCTS: {
        return {
          ...state,
          products: action.payload,
        };
      }
  
      case SET_LOADING_PRODUCTS: {
        return {
          ...state,
          isLoadingProducts: action.payload,
        }
      }
  
      default:
        return state;
    }
  };
  