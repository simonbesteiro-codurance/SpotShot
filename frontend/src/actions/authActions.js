import axios from "axios";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function logInUser() {
  return axios.post("http://localhost:4200/auth/login").then((user) => {
    dispatcher.dispatch({
      type: actionTypes.LOGIN_USER,
      data: user.data,
    });
  });
}
export function signUpUser() {
  return axios.post("http://localhost:4200/auth/register").then((user) => {
    dispatcher.dispatch({
      type: actionTypes.SIGNUP_USER,
      data: user.data,
    });
  });
}
