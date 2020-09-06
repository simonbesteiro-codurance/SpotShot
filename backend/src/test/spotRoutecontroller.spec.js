const { expect } = require("chai");

const sinon = require("sinon");
const spotRouteController = require("../controller/spotRouteController");

describe("Spot Route Controller test", () => {
  let req;
  let res;
  let controller;
  beforeEach(() => {
    req = {
      params: {},
    };
    res = {
      json: () => {},
    };
    controller = spotRouteController;
  });
  xit("should return all spots", () => {
    const jsonSpy = sinon.spy(res, "json");
    controller.get(req, res);
    expect(jsonSpy.called).to.be.true;
  });
  xit("should return a spot by id", () => {
    req = {
      params: { spotId: "5f4e4766174ddd4c09fabc9f" },
    };

    const jsonSpy = sinon.spy(res, "json");
    controller.get(req, res);
    expect(jsonSpy.called).to.be.true;
  });
});
