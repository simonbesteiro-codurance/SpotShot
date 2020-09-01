import spotStore from "../stores/spotStore";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

function reduceAction(action, state) {
  return {
    type: action,
    data: state,
  };
}

describe("Spot Component", () => {
  let spotStoreCallback;
  let action;
  let id;
  let myObject;
  beforeAll(() => {
    id = 1;
    myObject = [{ id: 0, image: "myImage", description: "myDescription" }];
  });
  beforeEach(() => {
    spotStoreCallback = jest.fn();
    spotStore.addChangeListener(spotStoreCallback);
    action = reduceAction(actionTypes.LOAD_SPOT, myObject);
    dispatcher.dispatch(action);
  });
  afterEach(() => {
    spotStore.removeChangeListener(spotStoreCallback);
  });

  it("should emit a change without error", () => {
    expect(spotStore.emitChange).toBeTruthy();
  });
  it("should add change listener without error", () => {
    expect(spotStore.addChangeListener).toBeTruthy();
  });
  it("should remove change listener  without error", () => {
    expect(spotStore.removeChangeListener).toBeTruthy();
  });

  it("should receive a spot giving an id", () => {
    id = 1;
    expect(spotStore.getSpotById(id)).toBeDefined();
  });
  it("should receive undefined giving an not valid id", () => {
    id = 0;
    expect(spotStore.getSpotById(id)).not.toBeDefined();
  });

  it("should return a spot list", () => {
    expect(spotStore.getSpot()).toBe(myObject);
  });

  it("should enter in default with a not valid Action", () => {
    action = reduceAction(actionTypes.MYACTION, [
      { id: 0, image: "myImage", description: "myDescription" },
    ]);
    dispatcher.dispatch(action);
    expect(spotStore).toBeTruthy();
  });
});
