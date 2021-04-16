import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/auth/actions';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';

import '../../index';

let Registration = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("/registration page");
  }, [])

  const onRegister = () => {
    let payload = {
      email: "ema@ma.rt",
      token: "token123"
    }

    dispatch(login(payload));
  }

  return (
    <div className="auth">
      <h1>Registration</h1>
      <div className="auth-main">
        <div className="input-auth">
          <Input placeholder="enter your email" />
          <Input placeholder="enter your password" />
          <Input placeholder="confirm your password" />
        </div>

        <div className="submit-block">
          <Checkbox>remember me</Checkbox>
          <div className="auth-submit-buttons">
            <Link to="/login">
              <Button type="ghost">back</Button>
            </Link>
            <Link to="/home">
              <Button onClick={onRegister} type="primary">sign up</Button>
            </Link>
          </div>

        </div>
      </div>
    </div>)
}

export default Registration;