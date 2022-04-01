import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLogin, UserRegister, UserModel } from "../../models/User";

interface authType {
  isLogged: boolean;
  isLogging: boolean;
  userState: UserModel;
}

const initialState: authType = {
  isLogged: false,
  isLogging: false,
  userState: {
    user: {
      score: 0,
      role: "",
      isEmailVerified: false,
      avatar: "",
      username: "",
      email: "",
      id: "",
    },
    tokens: {
      access: {
        token: "",
        expires: "",
      },
      refresh: {
        token: "",
        expires: "",
      },
    },
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<UserLogin>) {
      state.isLogging = true;
      console.log("abc");
    },
    getCurrentUser(state) {
      state.isLogging = true;
    },
    loginSuccess(state) {
      state.isLogged = true;
      state.isLogging = false;
    },
    loginFaile(state) {
      state.isLogged = false;
      state.isLogging = false;
    },
    signUp(state, action: PayloadAction<UserRegister>) {
      state.isLogging = true;
    },
    signOut(state) {
      state.isLogged = false;
      state.userState = initialState.userState;
    },
  },
});

const authReducer = authSlice.reducer;
export const authAction = authSlice.actions;
export default authReducer;
