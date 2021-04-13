import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/auth/actions';
import { Button, Input } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { Checkbox } from 'antd';

import '../../index';

let Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("/login page");
  }, [])
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
            <Link to="/">
              <Button onClick={loginHandle} type="primary">login</Button>
            </Link>
          </div>

        </div>
      </div>
    </div>)
}

export default Login;