import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.scss";
import { Link, Redirect } from "react-router-dom";
import { UserLogin } from "../../models/User";
import { authAction } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../app/hooks";
import { store } from "../../app/store";

export interface LoginPageProps {}
interface formState {
  username: string;
  password: string;
}

export default function LoginComponent(props: LoginPageProps) {
  const dispatch = useAppDispatch();

  const onFinish = (values: formState) => {
    console.log("Received values of form: ", values);
    const formLogin: UserLogin = {
      username: values.username,
      password: values.password,
    };
    console.log(formLogin);
    dispatch(authAction.login(formLogin));
  };

  // if (store.getState().auth.isLogged === true) {
  //   return <Redirect to="/user" />;
  // }

  return (
    <>
      <div className="my-form-login">
        <div className="my-cover-link">
          <i>Login to perform the survey</i>
          <h1>Login</h1>
          <Link to="/register" className="my-link">
            Don't have an account
          </Link>
        </div>
        <Form
          layout="vertical"
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
            className="my-label"
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            className="my-label"
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
