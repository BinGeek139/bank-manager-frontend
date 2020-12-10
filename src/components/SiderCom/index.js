import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import {
  Layout,
  Menu,
} from "antd";
import Logo from './../../assets/img/techasians-logo.png';
import "./styles.css";
import {
  ContactsOutlined,
  UsergroupAddOutlined,
  ProfileOutlined,
  ReadOutlined,
  FileDoneOutlined,
  DollarCircleOutlined,
  UnlockOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import { connect } from 'react-redux';

const { Sider } = Layout;
const { SubMenu } = Menu;



const styleSider = {
  overflow: "auto",
  position: "sticky",
  height: "100vh",
  top: 0,
  left: 0
}

function CustomMenuItem({
  key,
  label,
  to,
  exact,
  icon,
  ...props
}) {
  const match = useRouteMatch({
    path: to,
    exact: exact
  });

  return (
    <Menu.Item key={key} {...props} className={match ? "" : ""}>
      {icon}
      <Link to={to}>{label}</Link>
    </Menu.Item>
  );
}

function SiderCom({
  onLoadSession
}) {
  const collapsed = false;

  useEffect(() => {

  }, []);

  return (
    <Sider
      className={!collapsed ? "sider-style-big" : "sider-style-small"}
      style={styleSider}
      collapsible
      trigger={null}
      collapsed={collapsed}
    // onCollapse={() => setCollapsed(!collapsed)}
    >
      <Link className="logo-wrapper" to={`/home`}>
        <div className="logo">
          <img className="logo-img" src={Logo}></img>
          <h2 className="logo-title" >
            <small style={{ color: "#00A651" }}>Tech</small >
            <small style={{ color: "#F68D1F" }}>Asians</small>
          </h2>
        </div>
      </Link>
      <Menu theme="dark" mode="inline">
        <SubMenu key="sub1" icon={<ContactsOutlined />} title="Nhân Viên">
          <CustomMenuItem key={`sub1-1`} label={<><UsergroupAddOutlined />Quản lý nhân viên</>} exact={true} to={`/accounts`} />
          <CustomMenuItem key={`sub1-2`} label={<><UnlockOutlined /> Tính lương</>} exact={true} to={`/roles`} />
        
        </SubMenu>
        <SubMenu key="sub3" icon={<FileDoneOutlined />} title="Khách hàng">
        </SubMenu>
        
        <SubMenu key="sub2" icon={<UsergroupAddOutlined />} title="Tài khoản">
          <SubMenu key="sub2-1" icon={<ProfileOutlined />} title="Tài khoản tín dụng">
            <CustomMenuItem key={`sub2-1-1`} label={`Quản lý tài khoản`} exact={true} to={`/personnels`} />
            <Menu.Item key="sub2-1-2">Nộp tiền</Menu.Item>
            <Menu.Item key="sub2-1-3">Thanh toán</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2-2" icon={<ReadOutlined />} title="Tài khoản gửi tiền">
            <Menu.Item key="sub2-2-1">Quản lý tài khoản</Menu.Item>
            <Menu.Item key="sub2-2-2">Nộp tiền</Menu.Item>
            <Menu.Item key="sub2-2-3">Rút tiền</Menu.Item>
            <Menu.Item key="sub2-2-3">Chuyển tiền</Menu.Item>
          </SubMenu>
        </SubMenu>
        
      </Menu>
    </Sider>
  )
}




export default SiderCom;
