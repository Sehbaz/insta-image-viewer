import React from "react";
import "../login/login.css";
import Header from "../../common/header/header";

const { Component } = require("react");

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        Login Page
      </div>
    );
  }
}
export default Login;
