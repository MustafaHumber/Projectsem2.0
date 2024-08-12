import React from 'react';
import './Login.css';
import { authorize } from '../spotify';

const Login = () => {
  return (
    <button className="btn btn-success" onClick={authorize}>
      Login to Spotify
    </button>
  );
};

export default Login;
