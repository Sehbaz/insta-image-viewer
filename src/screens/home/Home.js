import { Component } from "react";
import React from "react";
import Header from "../../common/header/header";
import "../home/Home.css";
import Posts from "../allposts/Posts";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    let accesstoken = sessionStorage.getItem("access-token");

    fetch(
      "https://graph.instagram.com/me/media?fields=id,caption&access_token=" +
        accesstoken
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          posts: result.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Header showSearchOption="true" headerData={this.state.posts.id} />
        <div className="all-post-container">
          {this.state.posts.map((post) => (
            <Posts key={post.id} data={post.id} />
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
