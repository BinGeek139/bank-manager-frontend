import React from 'react';
import './styles.css';

import {
  Breadcrumb,
  Table,

  Layout,
  Menu
} from 'antd';

import {
  FileAddTwoTone,
  UnorderedListOutlined
} from '@ant-design/icons';
import {
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";
import ManagerStaff from "../../components/ManagerStaff";
import SiderCom from '../../components/SiderCom';
import HeaderCom from '../../components/HeaderCom';
import FooterCom from '../../components/FooterCom';


import { useRouteMatch } from 'react-router-dom';

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
import TinhLuong from '../../components/TinhLuongCom/TinhLuong';
import NopTien from '../../components/NopTienCom/NopTien';
import ThanhToan from '../../components/ThanhToanCreditCom/ThanhToanCredit';

const { Sider } = Layout;
const { SubMenu } = Menu;



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
const { Content } = Layout;

const styleSider = {
  overflow: "auto",
  position: "sticky",
  height: "100vh",
  top: 0,
  left: 0
}
function Home() {
  const collapsed = false;
  return (



    <Layout>

      <>
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
              <CustomMenuItem key={`sub1-1`} label={<><UsergroupAddOutlined />Quản lý nhân viên</>} exact={true} to={`/staff`} />
              <CustomMenuItem key={`sub1-2`} label={<><UnlockOutlined /> Tính lương</>} exact={true} to={`/tinhluong`} />

            </SubMenu>
            <SubMenu key="sub3" icon={<FileDoneOutlined />} title="Khách hàng">
            </SubMenu>

            <SubMenu key="sub2" icon={<UsergroupAddOutlined />} title="Tài khoản">
              <SubMenu key="sub2-1" icon={<ProfileOutlined />} title="Tài khoản tín dụng">
                <CustomMenuItem key={`sub2-1-1`} label={`Quản lý tài khoản`} exact={true} to={`#`} />
                <CustomMenuItem key={`sub2-1-2`} label={<>Nộp tiền</>} exact={true} to={`/noptien`} />
                <CustomMenuItem key={`sub2-1-3`} label={<>thanh toán</>} exact={true} to={`/thanhtoan`} />
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
        <Layout className="site-layout">
          <HeaderCom />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Switch>
                <Route exact path='/staff' exact>
                  <ManagerStaff />
                </Route>
                <Route path='/tinhluong'>
                  <TinhLuong />
                </Route>
                <Route path='/noptien'>
                  <NopTien />
                </Route>
                <Route path='/thanhtoan'>
                  <ThanhToan />
                </Route>
                <Route path='/'  >
                  <p>Chào mừng bạn đến với hệ thống quản lý chi nhánh ngân hàng</p>
                </Route>


              </Switch>


            </div>
          </Content>
          <FooterCom />
        </Layout>
      </>

    </Layout>


  );
}

export default Home;

