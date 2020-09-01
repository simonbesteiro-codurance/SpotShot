import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _spot = [];

class SpotStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getSpots() {
    return _spot;
  }

  getSpotById(id) {
    const selectedSpot = _spot.find((spot) => spot.id === id);

    return selectedSpot;
  }
}

const spotStore = new SpotStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_SPOT:
      _spot = action.data;
      spotStore.emitChange();
      break;

    default:
      break;
  }
});

export default spotStore;
