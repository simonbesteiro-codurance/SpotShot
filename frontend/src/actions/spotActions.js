import axios from "axios";
import spots from "../spot.mock";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadSpots() {
  return axios.get("http://localhost:4200/api/spots").then((spotList) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_SPOT,
      data: spotList.data,
    });
  });
}
export function createSpots() {
  return new Promise((resolve) => {
    resolve(spots);
  }).then((spot) => {
    dispatcher.dispatch({
      type: actionTypes.CREATE_SPOT,
      data: spot,
    });
  });
}
