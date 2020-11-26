import React from "react";
import "./Bar.css";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

const Bar = () => {
  return (
    <div className="bar_main">
      <div className="bar_main_child">
        <a href="../OverView/OvervView" className="bar_main_value">
          <ImportContactsOutlinedIcon
            style={{
              fontSize: "20px",
              border: "1px solid transparent",
              top: "5px",
              fill: "black",
            }}
          />
          Overview
        </a>
        <a href="Repositories" className="bar_main_value">
          <InsertDriveFileIcon
            style={{
              fontSize: "20px",
              border: "1px solid transparent",
              top: "5px",
              fill: "black",
            }}
          />
          Repositories
        </a>
        <a href="Project" className="bar_main_value">
          <AddPhotoAlternateIcon
            className=" bar_main_value_logo"
            style={{
              fontSize: "20px",
              border: "1px solid transparent",
              top: "5px",
              fill: "black",
            }}
          />
          Project
        </a>
        <a href="Packages" className="bar_main_value">
          <FolderOpenOutlinedIcon
            style={{
              fontSize: "20px",
              border: "1px solid transparent",
              top: "5px",
              fill: "black",
            }}
          />
          Packages
        </a>
      </div>
    </div>
  );
};

export default Bar;
