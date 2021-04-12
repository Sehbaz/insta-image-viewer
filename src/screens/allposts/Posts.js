import { Component } from "react";
import React from "react";
import PostCards from "../postcards/PostCards";

import "../allposts/Posts.css";

class Posts extends Component {
  render() {
    return (
      <div className="all-post-container">
        <div className="post-container">
          <div className="post">
            <PostCards
              postData={this.props.data}
              profileModeData={this.props.profileMode}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Posts;
