const { expect } = require("chai");
const sinon = require("sinon");
const authRouteController = require("../controller/authRouteController");
const Users = require("../models/authModel");
const secretService = require("../helper/secretService");

describe("Auth Route Controller test", () => {
  let req = null;
  let res = null;
  beforeEach(() => {
    req = {
      body: { username: "myUser", password: "myPassword" },
    };
    res = {
      send: () => {},
      sendStatus: () => {},
      json: () => {},
    };
  });
  afterEach(() => {
    sinon.restore();
  });

  it("should login an user", (done) => {
    sinon
      .stub(Users, "findOne")
      .returns({ id: 1, hash: "myHash", toJSON: () => {} });
    sinon.stub(secretService, "hashValidator").returns(true);

    const sendSpy = sinon.spy(res, "send");
    authRouteController.login(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });
  it("should reject a not matching password", (done) => {
    sinon
      .stub(Users, "findOne")
      .returns({ id: 1, hash: "myHash", toJSON: () => {} });
    sinon.stub(secretService, "hashValidator").returns(false);

    const sendSpy = sinon.spy(res, "send");
    authRouteController.login(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });
  it("should register an user if username dont exist", (done) => {
    sinon.stub(Users, "findOne").returns(true);

    const jsonSpy = sinon.spy(res, "json");
    authRouteController.register(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });
  it("should not register an user if username exist", (done) => {
    sinon.stub(Users, "findOne").returns(false);

    const sendSpy = sinon.spy(res, "send");
    const sendStatusSpy = sinon.spy(res, "sendStatus");
    authRouteController.register(req, res);
    done();
    expect(sendSpy.called).to.be.true;
    expect(sendStatusSpy.called).to.be.true;
  });
});
