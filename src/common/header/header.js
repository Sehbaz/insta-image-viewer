import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import "../header/header.css";
import { IconButton } from "@material-ui/core";
import userImage from "../../assets/userIcon.png";
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
    };
  }
  getUserProfile = () => {
    let accesstoken = sessionStorage.getItem("access-token");
    let userId = sessionStorage.getItem("user-id");
    /*
    fetch(
      "https://graph.instagram.com/" +
        userId +
        "?fields=id,media_type,media_url,username,timestamp&access_token=" +
        accesstoken
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          userProfile: result,
        });
      });
      */
  };

  render() {
    return (
      <div className="header-container">
        <div className="container-item logo">Image Viewer</div>
        {this.props.showSearchOption === "true"
          ? (this.getUserProfile(),
            (
              <div className="container-item ">
                <div>
                  <form className="home-search">
                    <button>
                      <SearchIcon />
                    </button>
                    <input type="text" placeholder="Search.." />
                  </form>
                </div>

                <div className="profile-img-container">
                  <IconButton size="small">
                    <img src={userImage} className="profile-img"></img>
                    {/*
                    {this.state.userProfile === "" ? (
                      <h1>Hello</h1>
                    ) : (
                      
                      <img
                        className="profile-img"
                        src={this.state.userProfile.media_url}
                        alt="profile-image"
                      />
                  )}
                    */}
                  </IconButton>
                </div>
              </div>
            ))
          : ""}
      </div>
    );
  }
}
export default withStyles(useStyles)(Header);
