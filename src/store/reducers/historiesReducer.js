import { SET_LOADING_HISTORIES, SET_HISTORIES, REMOVE_HISTORIES } from "../action/actionType";

const initialState = {
  histories: [],
  isLoading: false,
};

export default function historiesReducers(state = initialState, action){
  switch (action.type) {
    case SET_HISTORIES:
      return {
        ...state,
        histories: action.payload,
      };
    case SET_LOADING_HISTORIES:
      return {
        ...state,
        isLoading: action.payload,
      };

      case REMOVE_HISTORIES: {
        return {
          ...state,
          histories: state.histories.filter((history) => history.id !== action.payload),
        };
      }
    default:
      return {
        ...state,
      };
  }
}
