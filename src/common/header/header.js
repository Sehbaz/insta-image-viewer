import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../header/header.css";

const { Component } = require("react");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="container-item logo">Image Viewer</div>
        <div className="container-item home-search">
          <div>
            <input type="text" placeholder="Search.." />
          </div>
          <div>Profile Logo</div>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Header);
