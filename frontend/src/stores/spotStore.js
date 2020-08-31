import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import spots from "../spot.mock";

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

  getUser() {
    return _spot;
  }

  getSpotById(id) {
    _spot = spots.find((spot) => spot.id === id);
    return _spot;
  }
}

const spotStore = new SpotStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_SPOT:
      _spot = action.data;
      spotStore.emitChange(_spot);
      break;
    case actionTypes.CREATE_SPOT:
      _spot = [..._spot, action.data];
      spotStore.emitChange();
      break;
    default:
      break;
  }
});

export default spotStore;
