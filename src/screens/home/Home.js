import { Component } from "react";
import React from "react";
import Header from "../../common/header/header";
import "../home/Home.css";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    let accesstoken = sessionStorage.getItem("access-token");
    console.log("Access Token : " + accesstoken);
    fetch(
      "https://graph.instagram.com/me/media?fields=id,caption&access_token=" +
        accesstoken
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          posts: result.data,
        });
        console.log(this.state.posts);
      });
  }
  render() {
    return (
      <div>
        <Header showSearchOption="true" />
        Hi from the home page
      </div>
    );
  }
}
export default Home;
