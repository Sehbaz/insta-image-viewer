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
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            title="Username"
            subheader="September 14, 2016"
          ></CardHeader>

          <CardMedia>Image</CardMedia>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
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
