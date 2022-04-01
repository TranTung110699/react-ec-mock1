import { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../apis/authApi";
import { AxiosError } from "axios";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { UserModel, UserLogin, UserRegister } from "../../models/User";
import { authAction } from "./authSlice";

export function* hanleLogin(action: PayloadAction<UserLogin>) {
  try {
    const res: UserModel = yield call(authApi.login, action.payload);
    yield put(authAction.loginSuccess());
    toast.success("Login Success");
    if (res.user.role === "admin") {
      yield put(push("/admin"));
    } else {
      yield put(push("/user"));
    }
    localStorage.setItem("access_token", res.tokens.access.token);
    localStorage.setItem("refresh_token", res.tokens.refresh.token);
    localStorage.setItem("current_user", JSON.stringify(res));
    console.log(res);
  } catch (error) {
    yield put(authAction.loginFaile());
    toast.error("Username or password incorrect");
  }
}
export function* handleSignUp(action: PayloadAction<UserRegister>) {
  try {
    const res: UserModel = yield call(authApi.signUp, action.payload);
    yield put(authAction.loginSuccess());
    if (res.user.role === "admin") {
      yield put(push("/admin"));
    } else {
      yield put(push("/user"));
    }
    toast.success("Register success");
    localStorage.setItem("access_token", res.tokens.access.token);
    localStorage.setItem("refresh_token", res.tokens.refresh.token);
    localStorage.setItem("current_user", JSON.stringify(res));
    console.log(res);
  } catch (error) {
    yield put(authAction.loginFaile());
    const err = error as AxiosError;
    if (err.response) {
      toast.error(err.response.data.message);
    }
  }
}

export function* handleGetUserProfile() {
  try {
    const token = localStorage.getItem("access_token");
    if (token) {
      yield put(authAction.loginSuccess());
      console.log("Have token");
    } else {
      yield put(authAction.loginFaile());
      console.log("Have token");
    }
  } catch (error) {
    yield put(authAction.loginFaile());
    console.log("Have token");
  }
}

export default function* authSaga() {
  yield takeLatest(authAction.login.type, hanleLogin);
  yield takeLatest(authAction.signUp.type, handleSignUp);
  yield takeLatest(authAction.getCurrentUser.type, handleGetUserProfile);
}
