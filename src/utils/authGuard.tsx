import { store } from "../app/store";
import React, { ComponentType } from "react";
import { Redirect } from "react-router-dom";

export function WithAuth<T>(WrappedComponent: ComponentType<T>) {
  const EnhancedComponent = (props: T) => {
    const isLogged = store.getState().auth.isLogged;
    const role = store.getState().auth.userState.user.role;
    console.log(isLogged);
    console.log(role);

    // if (isLogged === true) {
    //   return <Redirect to={"/"} />;
    // } else {
    //   return <WrappedComponent {...props} />;
    // }

    if (isLogged === true && role === "admin") {
      return <Redirect to={"/admin"} />;
    } else if (isLogged && role === "user") {
      return <Redirect to={"/user"} />;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  return EnhancedComponent;
}
