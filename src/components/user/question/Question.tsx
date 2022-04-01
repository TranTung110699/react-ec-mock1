import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { store } from "../../../app/store";
import { questionAction } from "../../../features/user/question/questionSlice";
import "./question.scss";

const QuestionComponent = () => {
  const questionList = useAppSelector((state) => state.question.questions);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(questionAction.getQuestion());
  }, [dispatch]);
  console.log("questionlist", questionList);
  return <h1>Question</h1>;
};

export default QuestionComponent;
