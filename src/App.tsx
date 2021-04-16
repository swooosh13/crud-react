import React, { useEffect, useState } from 'react';

import './App.css';
import store, { RootState } from './redux/reducers/store';
import { Provider, useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login';
import 'antd/dist/antd.css';
import Registration from './components/Auth/Registration';
import Home from './components/Main/Home/Home';
import { compose } from 'redux';
import Navbar from './components/Navbar/Navbar'
import Users from './components/Main/Users/Users';

import { Layout } from 'antd';
import About from './components/Main/About/About';
import Dashboard from './components/Main/Dashboard/Dashboard';
const { Header, Footer, Sider, Content } = Layout;


let App = () => {

  let auth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <div>
      <Layout>
        {
          auth && <Sider theme="light">
            <Navbar />
          </Sider>
        }
        <Layout>
          <Content style={{ background: "#fff" }}>
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Content>
        </Layout>


      </Layout>

    </div >
  )
}

let AppWithRouter = compose(withRouter)(App);

let AppContainer = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppWithRouter />
      </Router>
    </Provider>
  )
}

export default AppContainer;
