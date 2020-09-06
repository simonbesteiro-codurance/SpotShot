import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _user = [];

class AuthStore extends EventEmitter {
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
    return _user;
  }
}

const authStore = new AuthStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      _user = action.data;
      spotStore.emitChange(_user);
      break;

    default:
      break;
  }
});

export default authStore;
