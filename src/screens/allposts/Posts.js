import { Component } from "react";
import React from "react";
import PostCards from "../postcards/PostCards";

import "../allposts/Posts.css";

class Posts extends Component {
  render() {
    return (
      <div className="all-post-container">
        <div className="post-container">
          <PostCards />
        </div>
        <div className="post-container">
          <PostCards />
        </div>
        <div className="post-container">
          <PostCards />
        </div>
      </div>
    );
  }
}
export default Posts;
