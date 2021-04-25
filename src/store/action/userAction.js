import { SET_AUTH } from "./actionType";
import axios from "axios"
import { url } from "../../urlConfig";

/* eslint-disable */

export function setAuth(isLogin) {
  return {
    type: SET_AUTH,
    payload: isLogin,
  };
}

export function setUsers() {
  return (dispatch) => {
    axios.get(`${url}/users`).then((res) => {
      console.log(res.data);
      dispatch(setAuth(res.data))
    });
  };
}
