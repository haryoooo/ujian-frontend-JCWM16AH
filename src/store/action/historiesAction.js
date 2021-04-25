import { SET_LOADING_HISTORIES, SET_HISTORIES, REMOVE_HISTORIES } from "../action/actionType";
import axios from 'axios'
import {url} from'../../urlConfig'

export function setHistories(data) {
  return {
    type: SET_HISTORIES,
    payload: data,
  };
}

export function setLoadingHistories(isLoading) {
  return {
    type: SET_LOADING_HISTORIES,
    payload: isLoading,
  };
}

export function RemoveHistories(data) {
  return {
    type: REMOVE_HISTORIES,
    payload: data,
  };
}

export function fetchHistories() {
  return (dispatch) => {
    setLoadingHistories(true)
    axios.get(`${url}/histories`)
    .then(res=>{
        console.log(res)
        setLoadingHistories(false)
        dispatch(setHistories(res.data))
    })
  };
}

export function removeHistories(id) {
  return (dispatch) => {
    axios.delete(`${url}/histories/${id}`).then((cart) => {
      dispatch(RemoveHistories(id));
    });
  };
}
