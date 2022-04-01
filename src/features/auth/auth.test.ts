import { takeLatest } from "redux-saga/effects";
import authSaga, { handleSignUp, hanleLogin } from "./authSaga";
import { authAction } from "./authSlice";

describe("Auth Saga", () => {
  const genObject = authSaga();

  it("Should wait for latest Login action and call hanleLogin", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(authAction.login.type, hanleLogin)
    );
  });
  it("Should wait for latest signUp action and call hanleSignUp", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(authAction.signUp.type, handleSignUp)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
