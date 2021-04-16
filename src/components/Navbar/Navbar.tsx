import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  DashboardOutlined,
  InfoOutlined
} from '@ant-design/icons';

import ButtonsPanel from '../Main/ButtonsPanel/ButtonsPanel'
import { Link } from 'react-router-dom';
import '../../index'

const { Sider } = Layout;



const Navbar = () => {

  return (
    <Sider
      theme="light"
      style={{
        overflow: 'auto',
        height: '100vh',
        width: '10vh',
        position: 'fixed',
        left: 0,
      }}
    >
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined twoToneColor="#52c41a" />}>
            Home
          <Link to="/home"></Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />}>
            Dashboard
          <Link to="/dashboard"></Link>
          </Menu.Item>
          <Menu.Item key="3" icon={< UserOutlined />}>
            Users
          <Link to="/users"></Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<InfoOutlined />}>
            About
          <Link to="/about"></Link>
          </Menu.Item>
        </Menu>
        <ButtonsPanel />
    
    </Sider>

  )
}

export default Navbar;