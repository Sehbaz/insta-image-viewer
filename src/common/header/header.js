import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import "../header/header.css";
import { IconButton } from "@material-ui/core";
import userImage from "../../assets/userIcon.png";
import Login from "../../screens/login/login";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ReactDOM from "react-dom";
import Profile from "../../screens/Profile/Profile";
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
  constructor() {
    super();
    this.state = {
      userProfile: [],
      anchorEl: null,
    };
  }
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  onClickLogout = () => {
    sessionStorage.removeItem("access-token");
    ReactDOM.render(<Login />, document.getElementById("root"));
  };
  onClickProfile = () => {
    ReactDOM.render(<Profile />, document.getElementById("root"));
  };
  render() {
    return (
      <div className="header-container">
        <div className="container-item logo">Image Viewer</div>
        <div className="container-item ">
          <div>
            {this.props.showSearchOption === "true" ? (
              <div>
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
          <div>
            <div className="profile-img-container">
              <IconButton
                size="small"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <img src={userImage} className="profile-img"></img>
              </IconButton>
            </div>
            <div>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.onClickProfile}>My account</MenuItem>

                <MenuItem onClick={this.onClickLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Header);
