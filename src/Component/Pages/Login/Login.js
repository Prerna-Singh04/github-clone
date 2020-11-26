import React from "react";
import "./Style/Login.css";
import LoginForm from "./Component/LoginForm";
import CreateAccountLink from "./Component/CreateAccountLink";
import GitHubIcon from '@material-ui/icons/GitHub';
const Login = () => {
  return (
    <div className="login_main">
      <GitHubIcon className="fab fa-github"/>
      <h3>Sign in to GitHub</h3>
      <LoginForm />
      <CreateAccountLink />
      <div className="login_child_third">
        <ul>
          <li>Terms</li>
          <li>Policy</li>
          <li>Security</li>
          <li>Contact GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
