import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { questionAction } from "./questionSlice";
import { Question, QuestionModel } from "../../../models/Question";
import { questionApi } from "../../../apis/questionApi";

export function* handleGetQuestion() {
  try {
    const res: QuestionModel = yield questionApi.getQuestion();
    console.log("question", res);
    yield put(questionAction.getQuestionSuccess(res));
  } catch (error) {}
}

export default function* questionSaga() {
  yield takeLatest(questionAction.getQuestion.type, handleGetQuestion);
}
