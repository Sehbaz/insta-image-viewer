import { Component } from "react";
import React from "react";
import Header from "../../common/header/header";
import "../home/Home.css";
import Posts from "../allposts/Posts";
import Avatar from "@material-ui/core/Avatar";
const styles = (theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

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
  getPostDetails = (e) => {
    let accesstoken = sessionStorage.getItem("access-token");
    let userId = sessionStorage.getItem("user-id");

    console.log("Access Token :" + accesstoken);
    console.log("userId :" + userId);
    let imgUrl = [];
    fetch(
      "https://graph.instagram.com/" +
        userId +
        "?fields=id,media_type,media_url,username,timestamp&access_token=" +
        accesstoken
    )
      .then((res1) => res1.json())
      .then((result) => {
        imgUrl = result.data;
      });

    return imgUrl;
  };

  render() {
    return (
      <div>
        <Header showSearchOption="true" />
        <div className="all-post-container">
          {this.state.posts.map((post) => (
            <Posts key={post.id} data={post.id} />
          ))}
        </div>

        {/*
        <div>
          {this.state.posts.map((post) => (
            <Card key={post.id}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">UG</Avatar>}
                action={<IconButton aria-label="settings"></IconButton>}
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography>{post.caption}</Typography>
              </CardContent>
              <CardMedia
                image={this.getPostDetails(post.id)}
                title="Paella dish"
              />
              <CardActions>
                {" "}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
          </div> */}
      </div>
    );
  }
}
export default Home;
