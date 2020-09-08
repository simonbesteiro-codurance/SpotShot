import axios from "axios";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function logInUser(username, password) {
  return axios
    .post("http://localhost:4200/auth/login", { username, password })
    .then((user) => {
      dispatcher.dispatch({
        type: actionTypes.LOGIN_USER,
        data: user.data,
      });
    });
}
export function signUpUser(username, password, firstName, lastName) {
  return axios
    .post("http://localhost:4200/auth/register", {
      username,
      password,
      firstName,
      lastName,
    })
    .then((user) => {
      dispatcher.dispatch({
        type: actionTypes.SIGNUP_USER,
        data: user.data,
      });
    });
}
export function signOut() {
  dispatcher.dispatch({
    type: actionTypes.SIGNOUT_USER,
  });
}