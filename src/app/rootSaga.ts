import authSaga from "../features/auth/authSaga";
import questionSaga from "../features/user/question/questionSaga";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([authSaga(), questionSaga()]);
}
