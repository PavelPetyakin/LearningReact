import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProjectPage, WelcomePage } from "../pages";
import { directions } from "./directions";

export function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path={directions.projects} component={ProjectPage} />
        <Route path={directions.home} component={WelcomePage} />
      </Switch>
    </Router>
  )
}