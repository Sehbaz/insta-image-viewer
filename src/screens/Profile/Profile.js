import React, { Component } from "react";
import Header from "../../common/header/header";
import "../Profile/Profile.css";
import userImage from "../../assets/userIcon.png";

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
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img src={userImage} alt="" />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{this.state.posts}</h1>

              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">post: </span> 10
                </li>
                <li>
                  <span className="profile-stat-count">followers :</span> 200
                </li>
                <li>
                  <span className="profile-stat-count">following :</span> 299
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">Jane Doe</span>{" "}
                <button className="btn profile-edit-btn">Edit Profile</button>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="gallery">
            <div className="gallery-item" tabIndex="0">
              <img src={userImage} className="gallery-image" alt="" />
            </div>
            <div className="gallery-item" tabIndex="0">
              <img src={userImage} className="gallery-image" alt="" />
            </div>
            <div className="gallery-item" tabIndex="0">
              <img src={userImage} className="gallery-image" alt="" />
            </div>
            <div className="gallery-item" tabIndex="0">
              <img src={userImage} className="gallery-image" alt="" />
            </div>
            <div className="gallery-item" tabIndex="0">
              <img src={userImage} className="gallery-image" alt="" />
            </div>
            <div className="gallery-item" tabIndex="0">
              <img src={userImage} className="gallery-image" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
