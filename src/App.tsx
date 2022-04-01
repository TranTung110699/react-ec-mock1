import React, { useEffect } from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/login/Login";
import RegisterComponent from "./components/register/Register";
import UserPageComponent from "./components/user/UserPage";
import AdminPageComponent from "./components/admin/AdminPage";
import { WithAuth } from "./utils/authGuard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AfterAuth } from "./utils/afterAuthGuard";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { authAction } from "./features/auth/authSlice";
import { store } from "./app/store";

function App() {
  // const isLoggingAuth = useAppSelector((state) => state.auth.isLogging);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authAction.getCurrentUser());
    console.log("check", store.getState().auth.isLogged);
    console.log(localStorage.getItem("current_user"));
  }, [dispatch]);
  return (
    <div>
      <Switch>
        {/* <Redirect exact from="/" to="/user" /> */}
        <Route path="/login" component={WithAuth(LoginComponent)} />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/user" component={UserPageComponent} />
        <Route path="/admin" component={AdminPageComponent} />
        {/* <Redirect exact from="**" to="/user" /> */}
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <Backdrop
				sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
				open={Boolean(isLoadingArticle || isLoggingAuth)}
			>
				<CircularProgress color="inherit" />
			</Backdrop> */}
    </div>
  );
}

export default App;
