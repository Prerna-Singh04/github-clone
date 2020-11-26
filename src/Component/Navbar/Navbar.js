import React from "react";
import "./Navbar.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";

const Navbar = (props) => {
  console.log("Inside NavBar Component", props);
  return (
    <div className="navbar_main">
      <GitHubIcon
        id="git_logo"
        style={{
          fontSize: "30px",
          border: "1px solid transparent",
          top: "2px",
          fill: "white",
        }}
      />
      <div className="navbar_main_child_first">
        <a href="pull" className="navbar_main_details">
          Pull request
        </a>
        <a href="pull" className="navbar_main_details">
          {" "}
          Issues
        </a>
        <a href="pull" className="navbar_main_details">
          Marketplace
        </a>
        <a href="pull" className="navbar_main_details">
          Explore
        </a>
      </div>
      <div className="navbar_main_child_second">
        <NotificationsNoneRoundedIcon
          style={{
            fontSize: "30px",
            border: "1px solid transparent",
            top: "2px",
            fill: "white",
          }}
        />
        <AddBoxRoundedIcon
          style={{
            fontSize: "30px",
            border: "1px solid transparent",
            top: "2px",
            fill: "white",
          }}
        />
        <img
          src={props.data.avatar_url}
          className="navbar_main_child_second_image"
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
