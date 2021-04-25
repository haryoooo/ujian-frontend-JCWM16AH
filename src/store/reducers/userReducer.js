import { SET_AUTH } from "../action/actionType";

const initialState = {
  users: [],
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};
