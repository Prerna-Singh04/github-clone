import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import LoginControler from "./Component/LginControler/LoginController";
import Login from "./Component/Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const userLogin = true;
const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route  path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
