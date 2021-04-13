import React from 'react';

import './App.css';
import Main from './components/Main/Home';
import store from './redux/reducers/store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import 'antd/dist/antd.css';
import Registration from './components/auth/Registration';

let routes = (
  <div>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
    </Switch>
  </div>
)

let AppContainer = () => {
  return (
    <Provider store={store}>
      <Router>
        {routes}
      </Router>
    </Provider>
  )
}

export default AppContainer;
