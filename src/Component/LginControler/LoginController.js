import React from "react";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";

const LoginControler = (WrappedComponent) => {
  class LoginProtector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isUserLogedin: true,
      };
    }
    render() {
      const newState = this.state;
      return <>{newState.isUserLogedin ? <WrappedComponent /> : <Login />}</>;
    }
  }
  return LoginProtector;
};

export default LoginControler;
