import { store } from "../app/store";
import React, { ComponentType } from "react";
import { Redirect } from "react-router-dom";

export function AfterAuth<T>(WrappedComponent: ComponentType<T>) {
  const EnhancedComponent = (props: T) => {
    const isLogged = store.getState().auth.isLogged;
    console.log(isLogged);

    if (isLogged === false) {
      return <Redirect to={"/login"} />;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  return EnhancedComponent;
}
