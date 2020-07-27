import axios from "axios";
import { USER_ADDED, USER_LOGIN, GET_ERROR } from "../actions/types";

export const register = (formData) => async (dispatch) => {
  axios
    .post("http://localhost:4000/verify/registeruser", formData)
    .then((res) => {
      console.log("in reg", res);
      if (res) {
        dispatch({
          type: USER_ADDED,
          payload: "User Registered with us",
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: USER_ADDED,
        payload: "User not registered with us",
      });
    });
};

export const login = (formData) => async (dispatch) => {
  axios
    .post("http://localhost:4000/verify/login", formData)
    .then((res) => {
      console.log("in login", res);
      if (res) {
        dispatch({
          type: USER_LOGIN,
          payload: "Login Successfull!",
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERROR,
        payload: "Login unsuccessfull!",
      });
    });
};
