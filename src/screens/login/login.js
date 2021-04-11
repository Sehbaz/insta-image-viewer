import React from "react";
import "../login/login.css";
import Header from "../../common/header/header";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { FormHelperText } from "@material-ui/core/";
import Home from "../home/Home";
import ReactDOM from "react-dom";
const { Component } = require("react");

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameRequired: "dispNone",
      password: "",
      passwordRequired: "dispNone",
      validUser: "dispNone",
      loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
    };
  }
  loginHandler = () => {
    if (this.state.username === "") {
      this.setState({ usernameRequired: "dispBlock" });
    } else {
      this.setState({ usernameRequired: "dispNone" });
    }
    if (this.state.password === "") {
      this.setState({ passwordRequired: "dispBlock" });
    } else {
      this.setState({ passwordRequired: "dispNone" });
    }
    let correctUsername = "admin";
    let correctPassword = "admin";
    let accessToken =
      "IGQVJXX250T2FhV3J4UVJ3ZAmdacVFvTWpuWXdWUGFfTGgzLVdyNERpQlQxeG5rTlAweWx5amVyTnBmc08tT2pHZAEczaEJueDl5VWd4elZA1aE1wdV9vSkRYSkQyRXdEdEFjNFdBN2NxVWJ5MnNFZATBMdAZDZD";
    var userId = "17871426962322029";
    if (
      this.state.username === correctUsername &&
      this.state.password === correctPassword
    ) {
      this.setState({ validUser: "dispNone" });
      sessionStorage.setItem("access-token", accessToken);
      sessionStorage.setItem("user-id", userId);
      this.setState({ loggedIn: true });

      ReactDOM.render(<Home />, document.getElementById("root"));
    } else {
      this.state.username !== "" && this.state.password !== ""
        ? this.setState({ validUser: "dispBlock" })
        : this.setState({ validUser: "dispNone" });
    }
  };
  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };
  inputPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />

        <div className="login-container">
          <Card className="login-item">
            <CardContent>
              <h1>LOGIN</h1>
              <FormControl required className="login-field">
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  type="text"
                  username={this.state.username}
                  onChange={this.inputUsernameChangeHandler}
                />
                <FormHelperText className={this.state.usernameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required className="login-field">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  username={this.state.password}
                  onChange={this.inputPasswordChangeHandler}
                />
                <FormHelperText className={this.state.passwordRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormHelperText className={this.state.validUser}>
                <span className="red">Incorrect username and/or password</span>
              </FormHelperText>
              <div className="login-btn">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.loginHandler}
                >
                  login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
export default Login;
