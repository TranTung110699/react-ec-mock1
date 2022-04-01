import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { store } from "../../app/store";
import { AfterAuth } from "../../utils/afterAuthGuard";
import QuestionComponent from "./question/Question";
import ResultComponent from "./result/Result";

const UserPageComponent = () => {
  // if (store.getState().auth.isLogged === false) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <div>
      <Switch>
        <Redirect exact from="/user" to="/user/question" />
        <Route path="/user/question" component={QuestionComponent} />

        <Route path="/user/result" component={ResultComponent} />

        <Redirect exact from="**" to="/user/question" />
      </Switch>
    </div>
  );
};

export default UserPageComponent;
