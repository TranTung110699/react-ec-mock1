import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../admin.scss";
import UserAddFormComponent from "./UserAddForm";
import UserEditFormComponent from "./UserEditForm";
import UserDetailComponent from "./UserDetail";
import { AfterAuth } from "../../../utils/afterAuthGuard";

const ManageUserComponent = () => {
  return (
    <>
      <Switch>
        <Route
          path="/admin/user-manage/add-form"
          component={UserAddFormComponent}
        />

        <Route
          path="/admin/user-manage/edit-form"
          component={UserEditFormComponent}
        />

        <Route
          path="/admin/user-manage/detail"
          component={UserDetailComponent}
        />
      </Switch>
    </>
  );
};

export default ManageUserComponent;
