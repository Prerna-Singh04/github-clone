import React from "react";
import "./Aside.css";
import OverView from "../OverView/OvervView";

import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import BusinessIcon from "@material-ui/icons/Business";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const Aside = (props) => {
  const data = props.data;
  return (
    <div className="aside_main">
      <div className="aside_div_main">
        {/* <div className="aside_div_child_first"> */}
        <img src={data.avatar_url} className="aside_div_child_first" />
        {/* </div> */}
        <div className="aside_div_child_second">
          <h3 className="aside_div_child_second_username">{data.name}</h3>
          <h3 className="aside_div_child_second_loginname">
            {data.login}
          </h3>
          <p className="aside_div_child_second_biodata">{data.bio}</p>

          <button className="aside_div_child_second_edit_button">
            Edit profile
          </button>
          <div className="aside_div_child_second_child_first">
            <PeopleOutlineIcon 
            className="aside_div_child_second_followers" 
            style={{
            fontSize: "20px",
            border: "1px solid transparent",
            top: "5px",
  
            fill: "black",
          }}/>
            <span> {data.followers}followers . </span>
            <PermIdentityIcon className="aside_div_child_second_following" style={{
            fontSize: "20px",
            border: "1px solid transparent",
            top: "5px",
  
            fill: "black",
          }}/>{" "}
            <span>{data.following}following .</span>
            <GradeOutlinedIcon className="aside_div_child_second_stars" style={{
            fontSize: "20px",
            border: "1px solid transparent",
            top: "5px",
  
            fill: "black",
          }} />
            <span> </span>
          </div>
          <div className="aside_div_child_second_child_second">
            <BusinessIcon className="aside_div_child_second_company" style={{
            fontSize: "20px",
            border: "1px solid transparent",
            top: "5px",
  
            fill: "black",
          }}/>{" "}
            <span className="aside_div_child_second_companyname">
              {data.company}
            </span>
          </div>

          <div className="aside_div_child_second_child_third">
            <LocationOnOutlinedIcon className="aside_div_child_second_location" 
            style={{
              fontSize: "30px",
              border: "1px solid transparent",
              // top: "0px",
    
              fill: "black",
            }}/>{" "}
            <span className="aside_div_child_second_location">
              {data.location}
            </span>
          </div>
        </div>
        <div className="aside_div_child_second_child_organization">
          Organizations
        </div>
      </div>
      <OverView />
    </div>
  );
}

export default Aside;
