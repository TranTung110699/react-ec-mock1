import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question, QuestionModel } from "../../../models/Question";

interface questionType {
  questions: Question[];
}

const initialState: questionType = {
  questions: [],
};

const questionSlice = createSlice({
  name: "question",
  initialState: initialState,
  reducers: {
    getQuestion: () => {},
    getQuestionSuccess: (state, action: PayloadAction<QuestionModel>) => {
      state.questions = action.payload.questions;
    },
  },
});

const questionReducer = questionSlice.reducer;
export const questionAction = questionSlice.actions;
export default questionReducer;
