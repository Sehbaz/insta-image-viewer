import React, { Component } from "react";
import Header from "../../common/header/header";
import "../Profile/Profile.css";
import userImage from "../../assets/userIcon.png";
import Posts from "../allposts/Posts";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      posts: "",
    };
  }
  componentDidMount() {
    let accesstoken = sessionStorage.getItem("access-token");

    fetch(
      "https://graph.instagram.com/me?fields=id,username&access_token=" +
        accesstoken
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          posts: result.username,
        });
      });
  }
  render() {
    return (
      <div>
        <Header showSearchOption="false" showProfileOption="true" />
        <div class="container">
          <div class="profile">
            <div class="profile-image">
              <img src={userImage} alt="" />
            </div>

            <div class="profile-user-settings">
              <h1 class="profile-user-name">{this.state.posts}</h1>

              <button
                class="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i class="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div class="profile-stats">
              <ul>
                <li>
                  <span class="profile-stat-count">post: </span> 10
                </li>
                <li>
                  <span class="profile-stat-count">followers :</span> 200
                </li>
                <li>
                  <span class="profile-stat-count">following :</span> 299
                </li>
              </ul>
            </div>

            <div class="profile-bio">
              <p>
                <span class="profile-real-name">Jane Doe</span>{" "}
                <button class="btn profile-edit-btn">Edit Profile</button>
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="gallery">
            <div class="gallery-item" tabindex="0">
              <img src={userImage} class="gallery-image" alt="" />
            </div>
            <div class="gallery-item" tabindex="0">
              <img src={userImage} class="gallery-image" alt="" />
            </div>
            <div class="gallery-item" tabindex="0">
              <img src={userImage} class="gallery-image" alt="" />
            </div>
            <div class="gallery-item" tabindex="0">
              <img src={userImage} class="gallery-image" alt="" />
            </div>
            <div class="gallery-item" tabindex="0">
              <img src={userImage} class="gallery-image" alt="" />
            </div>
            <div class="gallery-item" tabindex="0">
              <img src={userImage} class="gallery-image" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
