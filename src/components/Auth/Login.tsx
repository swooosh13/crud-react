import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/auth/actions';
import { Button, Input } from 'antd';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { Checkbox } from 'antd';

import '../../index';
import { RootState } from '../../redux/reducers/store';
import { stat } from 'node:fs';

let Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  useEffect((): any => {
    console.log("/login page");
  }, [isAuth]);

  if (isAuth) {
    return <Redirect to="/home" />
  }

  const loginHandle = () => {
    let payload = {
      email: "ema@ma.rt",
      token: "token123"
    }

    dispatch(login(payload));
  }

  return (
    <div className="auth">
      <h1>Auth</h1>
      <div className="auth-main">
        <div className="input-auth">
          <Input placeholder="enter your email" />
          <Input placeholder="enter your password" />
        </div>

        <div className="submit-block">
          <Checkbox>remember me</Checkbox>
          <div className="auth-submit-buttons">
            <Link to="/registration">
              <Button type="ghost">sign up</Button>
            </Link>
            <Link to="/home">
              <Button onClick={loginHandle} type="primary">login</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>)
}

export default Login;