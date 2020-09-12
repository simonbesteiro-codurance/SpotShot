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
  console.log(username);
  console.log(title);
  console.log(spotStyle);
  console.log(lat);
  console.log(lng);
  console.log(description);
  console.log(locationInfo);

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
      console.log(response);
      dispatcher.dispatch({
        type: actionTypes.CREATE_SPOT,
        data: response,
      });
    });
}
