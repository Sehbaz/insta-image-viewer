import React, { Component } from "react";
import Header from "../../common/header/header";
import "../Profile/Profile.css";
import userImage from "../../assets/userIcon.png";
class Profile extends Component {
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
              <h1 class="profile-user-name">janedoe_</h1>

              <button class="btn profile-edit-btn">Edit Profile</button>

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
                  <span class="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span class="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span class="profile-stat-count">206</span> following
                </li>
              </ul>
            </div>

            <div class="profile-bio">
              <p>
                <span class="profile-real-name">Jane Doe</span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
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
