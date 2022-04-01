import { Question } from "../models/Question";
import { UserLogin, UserModel, UserRegister } from "../models/User";
import { apiUrls } from "./api";
import customAxios from "./customAxios";

export const questionApi = {
  getQuestion(): Promise<Question> {
    const url = apiUrls.getQuestionApi;
    return customAxios.get(url);
  },
};
