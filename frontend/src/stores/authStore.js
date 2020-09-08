import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _user = [];
let _token = "";
let _message = "";
let _err = "";

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
  getToken() {
    return _token;
  }
  getMessage() {
    return _message;
  }
  getErr() {
    return _err;
  }
}

const authStore = new AuthStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      _user = action.data;
      _token = action.data.token && action.data.token;
      _message = action.data.message && action.data.message;
      authStore.emitChange(_user);
      break;

    case actionTypes.SIGNUP_USER:
      _user = action.data;
      _err = action.data.err && action.data.err;
      authStore.emitChange(_user);
      break;
    default:
      break;
  }
});

export default authStore;
