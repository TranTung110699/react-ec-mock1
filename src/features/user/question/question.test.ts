import { takeLatest } from "redux-saga/effects";
import questionSaga, { handleGetQuestion } from "./questionSaga";
import { questionAction } from "./questionSlice";

describe("Question Saga", () => {
  const genObject = questionSaga();

  it("Should wait for latest get Question action and call handleGetQuestion", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(questionAction.getQuestion.type, handleGetQuestion)
    );
  });
});
