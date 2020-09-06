const { expect } = require("chai");

const sinon = require("sinon");
const authRouteController = require("../controller/authRouteController");

describe("Auth Route Controller test", () => {
  it("should register an user", () => {
    const req = {
      body: {
        username: "JohnDoe",
        password: "123456",
      },
    };
    const res = {
      json: () => {},
      send: () => {},
      sendStatus: () => {},
    };

    const sendSpy = sinon.spy(res, "send");
    authRouteController.register(req, res);
    expect(sendSpy.called).to.be.true;
  });
});
