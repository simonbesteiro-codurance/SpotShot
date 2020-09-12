import axios from "axios";
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
export function createSpot(
  username,
  title,
  spotStyle,
  lat,
  lng,
  description,
  locationInfo
) {
  return axios
    .post("http://localhost:4200/api/spots", {
      username,
      title,
      spotStyle,
      lat,
      lng,
      description,
      locationInfo,
    })
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.CREATE_SPOT,
        data: response,
      });
    });
}
export function deleteSpot(spotId) {
  return axios
    .post("http://localhost:4200/api/spots/remove", spotId)
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.DELETE_SPOT,
        data: response,
      });
    });
}
