import createSagaMiddleware from "@redux-saga/core";
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { history } from "../utils/history";
import authReducer from "../features/auth/authSlice";
import rootSaga from "./rootSaga";
import questionReducer from "../features/user/question/questionSlice";

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  counter: counterReducer,
  question: questionReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare, routerMiddleware(history)),
});

sagaMiddleWare.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
