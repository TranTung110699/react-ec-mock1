import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const UserPageComponent = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default UserPageComponent;
