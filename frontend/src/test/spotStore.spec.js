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
  beforeEach(() => {
    spotStoreCallback = jest.fn();
    spotStore.addChangeListener(spotStoreCallback);
    action = reduceAction(actionTypes.LOAD_SPOT, [
      { id: 0, image: "myImage", description: "myDescription" },
    ]);

    dispatcher.dispatch(action);
  });
  afterEach(() => {
    spotStore.removeChangeListener(spotStoreCallback);
  });
  xit("should emit a change", () => {
    expect(spotStore.emitChange()).toHaveBeenCalled();
  });
  xit("should receive a spot giving an id", () => {
    const id = 1;
    expect(spotStore.getSpotById(id)).toHaveBeenCalled();
  });
  it("should return a spot list", () => {
    const id = 1;
    expect(spotStore.getSpot()).toHaveBeenCalled();
  });
});
