import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Home.module.css'
import { RootState } from '../../redux/reducers/store';
import Items from './Items/Items';
import ButtonsPanel from './ButtonsPanel/ButtonsPanel';
import * as Icon from 'react-feather';
import { Input } from 'antd';
import { loadItems } from '../../redux/reducers/items/items-reducer';
import { logout } from '../../redux/reducers/auth/actions';
import Auth from '../auth/Login';

import '../../index';

import { Layout, Menu } from 'antd';
import {
  UserOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;


const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch])

  return (
    <>
      <div className={s.container}>
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                lab
              </Menu.Item>
              <ButtonsPanel />
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} >
              <div>
                <div className={s.block}>
                  <Search placeholder="input search text" enterButton onSearch={() => console.log("search")} />
                </div>
              </div>
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

                <div>
                  <Items />
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        </Layout>
      </div>
    </>)
}

const HomeRouter = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();
  
  return (
    <div>
      {
        isAuth ? <Main /> : <Auth />
      }
    </div>
  )
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default HomeRouter;
