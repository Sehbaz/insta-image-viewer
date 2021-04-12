import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Login from "../screens/login/login";
class Controller extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} exact />
        </Switch>
      </Router>
    );
  }
}
export default Controller;
