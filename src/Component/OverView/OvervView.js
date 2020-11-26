import React from "react";
import "./OverView.css";
import OverViewSmallComp from "./OverViewSmallComp";

const OverView = () => {
  // const repoDetails = [
  //   {
  //     compName:'neo4j-documentation',
  //      basicDetails:'HTML',
  //      color: 'red',
  //      star: 1,
  //      id:1
  //   },
  //   {
  //     compName:'neo4j-documentation',
  //      basicDetails:'HTML',
  //      color: 'red',
  //      star: 1,
  //      id:2
  //   },
  //   {
  //     compName:'todo-list',
  //      basicDetails:'javaScript',
  //      color: 'red',
  //      star: 1,
  //      id:3
  //   },
  //   {
  //     compName:'javascript',
  //      basicDetails:'HTML',
  //      color: 'red',
  //      star: 1,
  //      id:4
  //   }
  // ]
  return (
    <div className="overview_div_main">
      <h6 className="overview_div_main_title">Popular repositories</h6>
      <div className="overview_div_main_child">
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="pink"
          star="1"
        />
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="red"
          star="1"
        />
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="orange"
          star="1"
        />
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="maroon"
          star="1"
        />
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="purple"
          star="1"
        />
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="violet"
          star="1"
        />
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="green"
          star="1"
        />
        
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="blue"
          star="1"
        />
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="yellow"
          star="1"
        />
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="brown"
          star="1"
        />
        <OverViewSmallComp
          compName="neo4j-documentation"
          otherDetails="BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA "
          basicDetails="Text"
          color="aqua"
          star="1"
        />
       
        {/* <OverViewSmallComp data={repoDetails}/> */}
      </div>
    </div>
  );
};

export default OverView;
