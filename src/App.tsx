import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/login/Login";
import RegisterComponent from "./components/register/Register";
import QuestionComponent from "./components/user/question/Question";
import ResultComponent from "./components/user/result/Result";
import UserPageComponent from "./components/user/UserPage";
import AdminPageComponent from "./components/admin/AdminPage";
import ManageQuestionComponent from "./components/admin/manage-question/ManageQuestion";
import ManageUserComponent from "./components/admin/manage-user/ManageUser";
import UserAddFormComponent from "./components/admin/manage-user/UserAddForm";
import UserEditFormComponent from "./components/admin/manage-user/UserEditForm";
import UserDetailComponent from "./components/admin/manage-user/UserDetail";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/user" replace />} /> */}

        <Route path="/login" element={<LoginComponent />} />

        <Route path="/register" element={<RegisterComponent />} />

        <Route path="/user" element={<UserPageComponent />}>
          <Route
            path="/user"
            element={<Navigate to="/user/question" replace />}
          />

          <Route path="/user/question" element={<QuestionComponent />} />

          <Route path="/user/result" element={<ResultComponent />} />
        </Route>

        <Route path="/admin" element={<AdminPageComponent />}>
          <Route
            path="/admin"
            element={<Navigate to="/admin/question-manage" replace />}
          />

          <Route
            path="/admin/question-manage"
            element={<ManageQuestionComponent />}
          />

          <Route path="/admin/user-manage" element={<ManageUserComponent />}>
            <Route
              path="/admin/user-manage/add-form"
              element={<UserAddFormComponent />}
            />

            <Route
              path="/admin/user-manage/edit-form"
              element={<UserEditFormComponent />}
            />

            <Route
              path="/admin/user-manage/detail"
              element={<UserDetailComponent />}
            />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/user" replace />} />
      </Routes>
    </>
  );
}

export default App;
