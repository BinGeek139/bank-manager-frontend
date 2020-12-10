import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { message, Space } from 'antd';
import {
  login
} from './../../actions/authentication';

import "./styles.css";
import Axios from '../../commons/Axios';
import { Redirect, Route } from 'react-router-dom';
import Home from '../Home';

function SignIn() {

  const [isRedirect, setIsRedirect] = useState(false);
  const error = (mess) => {
    message.error(mess);
  };

  const onFinish = values => {
    const { username, password } = values;
    const user = {
      username: username,
      password: password
    }

    Axios.post("http://localhost:8080/api/login", user)
      .then(res => {

        console.log(res.data);
        if (res.data.errorCode == "0") {
          localStorage.setItem('token', res.data.data.accessToken);
          setIsRedirect(true);
        } else {
          error("Sai tài khoản hoặc mật khẩu");
        }
      })
      .catch(err => {
        error("Lỗi kết nối")
      });
  }
  

  if (isRedirect) {
    return <>
      <Home />
    </>;
  } else
    return (
      <>
        <div className="modal">
          <div className="modal-body">
            <div className="modal-header">
              <h1 className="modal-header-title">
                <small style={{ color: "#e52165" }}>Đăng </small>
                <small style={{ color: "#0d1137" }}>Nhập</small>
              </h1>
            </div>
            <Form
              name="normal_login"
              className="login-form"
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
                    message: 'Vui lòng điền tài khoản !',
                  },
                ]}
              >
                <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tài khoản" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền mật khẩu !',
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Mật khẩu"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>
              <Form.Item>
                <Button size="middle" type="primary" htmlType="submit" className="login-form-button">
                  Đăng nhập
              </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    )
}



export default SignIn;
