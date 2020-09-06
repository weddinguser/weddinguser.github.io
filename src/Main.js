import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import App from "./App";

function Main() {
  return (
    <Switch>
      <Route path="/:username" component={App} />
      <Route exact path="/">
        <Redirect to="/дорогой-гость" />
      </Route>
    </Switch>
  );
}

export default Main;
