import React from "react";
import "./OverView.css";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

const OverViewSmallComp = (props) => {
  // const {obj1,obj2,obj3,obj4}= props.data;
  // const {compName,basicDetails,color,star,id} = props.data;
  return (
    <div className="overviewsmallcomp_div_main" key={props.id}>
      <h5 className=" headline">{props.compName}</h5>
      <h6 className="address">{props.otherDetails}</h6>
      <p className=" details">
        <FiberManualRecordOutlinedIcon
          style={{
            fill: props.color,
            fontSize: "20px",
            border: "1px solid transparent",
            top: "3.5px",
            marginLeft: "0px",
          }}
        />
        <span className="overviewsmallcomp_div_main_repo_details">
          {props.basicDetails}
        </span>
        <StarBorderOutlinedIcon
          style={{
            fontSize: "20px",
            border: "1px solid transparent",
            top: "2.5px",
            marginLeft: "10px",
          }}
        />
        <span className="overviewsmallcomp_div_main_repo_details">
          {props.star}
        </span>
      </p>
    </div>
  );
};

export default OverViewSmallComp;
