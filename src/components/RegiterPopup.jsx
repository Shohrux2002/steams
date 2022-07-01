import "antd/dist/antd.min.css";
import "../style.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
// import FacebookAuht from "./FacebookAuth";
// import GitHubAuht from "./GitHubAuth";
// import NumberAuth from "./NumberAuth";
// import GoogleAuthContainer from "../containers/GoogleAuthContainer";
import { useState } from "react";
import store from "../redux/store";

const RegisterPopup = (props) => {
  const [userpaswort, setPaswort] = useState();
  const [useremail, setemail] = useState();

  const getPaswort = (e) => {
    setPaswort(e.target.value);
  };
  const getEmail = (e) => {
    setemail(e.target.value);
  };
  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
  };

  return (
    <Form
      // onSubmitCapture={(e) => {
      //   e.preventDefault();
      // }}

      name="normal_login"
      className="register-popup login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          onChange={getEmail}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          onChange={getPaswort}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      <div className="aut-social">
        {/* <GoogleAuthContainer />
        <FacebookAuht />
        <GitHubAuht />
        <NumberAuth /> */}
      </div>
      <Form.Item>
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.formDataAction(userpaswort, useremail);
            console.log(store.getState());
          }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default RegisterPopup;
