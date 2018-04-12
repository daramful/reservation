import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./components/NotFound/404";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route component={NotFound} />

  </Switch>;
