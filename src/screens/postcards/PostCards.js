import { Component } from "react";
import React from "react";
import "../postcards/PostCards.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button, TextField } from "@material-ui/core";

class PostCards extends Component {
  constructor() {
    super();

    this.state = {
      grey: true,
      likeCount: 0,
      postsData: [],
      timestamp: "",
    };
  }
  componentDidMount() {
    let accesstoken = sessionStorage.getItem("access-token");
    let userId = this.props.postData;

    fetch(
      "https://graph.instagram.com/" +
        userId +
        "?fields=id,media_type,media_url,username,timestamp&access_token=" +
        accesstoken
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          postsData: result,
        });
      });
  }
  changeColor() {
    this.setState({ grey: !this.state.grey });
    if (this.state.grey === true) {
      this.setState({ likeCount: 1 });
    } else {
      this.setState({ likeCount: 0 });
    }
  }
  render() {
    let btn_class = this.state.grey ? "greyButton" : "redButton";

    return (
      <div>
        {this.props.profileModeData === "true" ? (
          <img
            src={this.state.postsData.media_url}
            className="post-img"
            alt=""
          ></img>
        ) : (
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="recipe">UG</Avatar>}
              title={this.state.postsData.username}
              subheader={
                new Date(this.state.postsData.timestamp).getDate() +
                "/" +
                (new Date(this.state.postsData.timestamp).getMonth() + 1) +
                "/" +
                new Date(this.state.postsData.timestamp).getFullYear() +
                " " +
                new Date(this.state.postsData.timestamp).getHours() +
                ":" +
                new Date(this.state.postsData.timestamp).getMinutes() +
                ":" +
                new Date(this.state.postsData.timestamp).getSeconds()
              }
            ></CardHeader>

            <CardMedia>
              <img
                src={this.state.postsData.media_url}
                className="post-img"
                alt=""
              ></img>
            </CardMedia>
            <CardActions>
              <FavoriteIcon
                className={btn_class}
                onClick={this.changeColor.bind(this)}
              />
              <span>{this.state.likeCount} likes</span>
            </CardActions>
            <div className="comment-section">
              <form className="comment-form">
                <TextField
                  id="standard-basic"
                  label="Add a Comment"
                  fullWidth
                />
                <Button variant="contained" color="primary">
                  ADD
                </Button>
              </form>
            </div>
          </Card>
        )}
      </div>
    );
  }
}
export default PostCards;
