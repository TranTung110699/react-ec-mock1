import { UserLogin, UserModel, UserRegister } from "../models/User";
import { apiUrls } from "./api";
import customAxios from "./customAxios";

export const authApi = {
  login(loginData: UserLogin): Promise<UserModel> {
    const url = apiUrls.loginApi;
    return customAxios.post(url, loginData);
  },
  signUp(signUpData: UserRegister): Promise<UserModel> {
    const url = apiUrls.registerApi;
    return customAxios.post(url, signUpData);
  },
  // logout(logout: UserModel): Promise<UserModel> {
  //   const url = apiUrls.registerApi;
  //   return customAxios.post(url, signUpData);
  // },
  // signUp(signUpData: UserRegister): Promise<UserModel> {
  //   const url = apiUrls.registerApi;
  //   return customAxios.post(url, signUpData);
  // },
};
