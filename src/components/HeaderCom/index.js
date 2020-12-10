import React from 'react';
import {
  Layout,
  Dropdown,
  Menu
} from 'antd';
import {
  Link
} from "react-router-dom";
import Avatar from './../../assets/img/quang.jpg';

import {
  UserOutlined,
  VerifiedOutlined,
  QuestionCircleOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux';
const { Header } = Layout;

const menuUser = (
  <Menu>
    <Menu.Item icon={<UserOutlined />}>
      <Link to="#">
        Thông tin cá nhân
      </Link>
    </Menu.Item>
    <Menu.Item icon={<QuestionCircleOutlined />}>
      <Link to="#">
        Đổi mật khẩu
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item icon={<PoweroffOutlined />}>
      <Link to="#">
        Đăng xuất
      </Link>
    </Menu.Item>
  </Menu>
);

const menuLang = (
  <Menu>
    <Menu.Item>
      <a href="#">
        <small>US</small> English
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#">
        <small>VI</small> Việt Nam
      </a>
    </Menu.Item>
  </Menu>
);

function HeaderCom({
  ...props
}) {
  return (
    <>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div className="header-wrapper">
          <div className="header-right">
            <ul className="header-right-list">
              <Dropdown overlay={menuUser}>
                <li className="header-right-item">
                  <img src={Avatar} className="header-right-item-img"></img>
                  <a className="header-right-username">{props.username}</a>
                </li>
              </Dropdown>
              <Dropdown overlay={menuLang}>
                <li className="header-right-item">
                  <VerifiedOutlined className="lang" />
                </li>
              </Dropdown>
            </ul>
          </div>
        </div>
      </Header>
    </>
  )
}



export default HeaderCom;