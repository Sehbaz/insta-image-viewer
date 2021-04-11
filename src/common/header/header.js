import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
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
        {this.props.showSearchOption === "true" ? (
          <div className="container-item ">
            <div>
              <form className="home-search">
                <button>
                  <SearchIcon />
                </button>
                <input type="text" placeholder="Search.." />
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default withStyles(useStyles)(Header);
