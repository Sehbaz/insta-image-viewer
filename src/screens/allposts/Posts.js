import { Component } from "react";
import React from "react";
import PostCards from "../postcards/PostCards";

import "../allposts/Posts.css";

class Posts extends Component {
  render() {
    console.log("Posts :" + this.props.data);
    return (
      <div className="all-post-container">
        <div className="post-container">
          <div className="post">
            <PostCards postData={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}
export default Posts;
