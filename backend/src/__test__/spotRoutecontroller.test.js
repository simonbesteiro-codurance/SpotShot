const { expect } = require("chai");
const databaseCalls = require("../database-utils/databaseCalls");
const sinon = require("sinon");
const spotRouteController = require("../controller/spotRouteController");
const uploadImageServiceLogic = require("../logic/uploadImageService");
const { get } = require("mongoose");

describe("Spot Route Controller Test", () => {
  let req;
  let res;
  let response;
  afterEach(() => {
    sinon.restore();
  });
  it("should get an spot by id when spotId exist", (done) => {
    response = "myResponse";
    req = {
      params: {
        spotId: "mySpotId",
      },
    };
    res = {
      json: () => {},
    };
    sinon.stub(databaseCalls, "getProductById").returns(
      new Promise((resolve) => {
        resolve(response);
      })
    );
    const jsonSpy = sinon.spy(res, "json");
    spotRouteController.get(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });
  it("should get all spots when spotId does not exist", (done) => {
    response = "myResponse";
    req = {
      params: {},
    };
    res = {
      json: () => {},
    };
    sinon.stub(databaseCalls, "getAllProducts").returns(
      new Promise((resolve) => {
        resolve(response);
      })
    );
    const jsonSpy = sinon.spy(res, "json");
    spotRouteController.get(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });
  it("should delete an spot giving an id", (done) => {
    response = "myResponse";
    req = {
      params: {},
      body: {
        spotId: "mySpotId",
      },
    };
    res = {
      json: () => {},
      send: () => {},
    };
    sinon.stub(databaseCalls, "removeSpotById").returns(
      new Promise((resolve) => {
        resolve(response);
      })
    );
    const sendSpy = sinon.spy(res, "send");
    spotRouteController.deleter(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });
  it("should upload an Image", (done) => {
    response = "myResponse";
    req = {
      params: {},
      body: {
        spotId: "mySpotId",
      },
      headers: {},
    };
    res = {
      json: () => {},
      send: () => {},
      status: () => {},
    };
    sinon.stub(databaseCalls, "removeSpotById").returns(
      new Promise((resolve) => {
        resolve(response);
      })
    );
    const Busboy = (params) => {
      this.on = (arg, callback) => {};
    };
    const sendSpy = sinon.spy(res, "send");
    spotRouteController.uploadImage(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });
});
