import { Component } from "react";
import React from "react";
import Header from "../../common/header/header";
import "../home/Home.css";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        Hi from the home page
      </div>
    );
  }
}
export default Home;
