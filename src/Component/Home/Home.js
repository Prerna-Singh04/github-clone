import React from "react";
import Login from "../Pages/Login/Login";
import Navbar from "../Navbar/Navbar";
import Bar from "../Bar/Bar";
import Aside from "../Aside/Aside";
import LoginControler from "../LginControler/LoginController";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
    };
  }

  componentDidMount() {
    console.log("inside componentDidMount method");
    const url = "https://api.github.com/users/Prerna-Singh04";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          response: data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const newState = this.state;
    const Data = this.state.response || {};
    console.log("Inside Home reander");
    return (
      <div>
        <Navbar data={Data} />
        <Bar data={Data} />
        <Aside data={Data} />
      </div>
    );
  }
}

export default LoginControler(Home);
