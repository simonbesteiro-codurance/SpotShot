import spots from "../spot.mock";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadSpots() {
  return new Promise((resolve) => {
    resolve(spots);
  }).then((spotList) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_SPOT,
      data: spotList,
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
