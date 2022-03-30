import React, { useState } from "react";
import "./admin.scss";
import UserListComponent from "./manage-user/UserList";
import { Outlet } from "react-router-dom";

const AdminPageComponent = () => {
  return (
    <>
      <div>
        <UserListComponent />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AdminPageComponent;
