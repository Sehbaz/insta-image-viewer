import React from "react";
import "../login/login.css";
import Header from "../../common/header/header";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
const { Component } = require("react");
class Login extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="login-container">
          <Card className="login-item">
            <CardContent>
              <h1>LOGIN</h1>
              <FormControl required className="login-field">
                <InputLabel htmlFor="username">Username </InputLabel>
                <Input id="username" type="text" />
              </FormControl>
              <br />
              <br />
              <FormControl required className="login-field">
                <InputLabel htmlFor="password">Password </InputLabel>
                <Input id="password" type="password" />
              </FormControl>

              <div className="login-btn">
                <Button variant="contained" color="primary">
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
