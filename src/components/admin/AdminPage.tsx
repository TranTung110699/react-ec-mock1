import React, { useState } from "react";
import "./admin.scss";
import UserListComponent from "./manage-user/UserList";
import { Switch, Route, Redirect } from "react-router-dom";
import ManageQuestionComponent from "./manage-question/ManageQuestion";
import ManageUserComponent from "./manage-user/ManageUser";
import { AfterAuth } from "../../utils/afterAuthGuard";
import { store } from "../../app/store";

const AdminPageComponent = () => {
  // if (store.getState().auth.isLogged === false) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <>
      <div>
        <UserListComponent />
      </div>
      <div>
        <Switch>
          <Redirect exact from="/admin" to="/admin/question-manage" />

          <Route
            path="/admin/question-manage"
            component={ManageQuestionComponent}
          />

          <Route path="/admin/user-manage" component={ManageUserComponent} />

          <Redirect exact from="**" to="/admin/question-manage" />
        </Switch>
      </div>
    </>
  );
};

export default AdminPageComponent;
