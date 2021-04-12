import React, { Component } from "react";
import Header from "../../common/header/header";
class Profile extends Component {
  render() {
    return (
      <div>
        <Header showSearchOption="false" showProfileOption="true" />
        Hi from Profile
      </div>
    );
  }
}
export default Profile;
