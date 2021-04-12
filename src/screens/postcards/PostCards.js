import { Component } from "react";
import React from "react";
import "../postcards/PostCards.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button, TextField } from "@material-ui/core";

class PostCards extends Component {
  constructor() {
    super();

    this.state = {
      grey: true,
      likeCount: 0,
    };
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
        <Card>
          <CardHeader
            avatar={<Avatar aria-label="recipe">UG</Avatar>}
            title="Username"
            subheader="September 14, 2016"
          ></CardHeader>

          <CardMedia>Image</CardMedia>
          <CardActions>
            <FavoriteIcon
              className={btn_class}
              onClick={this.changeColor.bind(this)}
            />
            <span>{this.state.likeCount} likes</span>
          </CardActions>
          <div className="comment-section">
            <form className="comment-form">
              <TextField id="standard-basic" label="Add a Comment" fullWidth />
              <Button variant="contained" color="primary">
                ADD
              </Button>
            </form>
          </div>
        </Card>
      </div>
    );
  }
}
export default PostCards;
