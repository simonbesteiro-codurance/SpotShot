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
export function createSpot(
  username,
  title,
  spotStyle,
  latitude,
  longitude,
  description,
  locationInfo
) {
  console.log(title);
  console.log(spotStyle);
  console.log(latitude);
  console.log(longitude);
  console.log(description);
  console.log(locationInfo);

  return axios
    .post("http://localhost:4200/api/spots", {
      username,
      title,
      spotStyle,
      latitude,
      longitude,
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
