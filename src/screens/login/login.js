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
const { Component } = require("react");

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameRequired: "dispNone",
      password: "",
      passwordRequired: "dispNone",
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
