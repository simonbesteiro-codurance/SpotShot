import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _user = [];
let _token = "";
let _message = "";

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
    console.log(_user);
    return _user;
  }
  getToken() {
    return _token;
  }
  getMessage() {
    return _message;
  }
}

const authStore = new AuthStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      _user = action.data;
      _token = action.data.token && action.data.token;
      console.log(_token);

      _message = action.data.message && action.data.message;
      console.log(_message);
      authStore.emitChange(_user);
      break;

    case actionTypes.SIGNUP_USER:
      _user = action.data;
      authStore.emitChange(_user);
      break;
    default:
      break;
  }
});

export default authStore;
