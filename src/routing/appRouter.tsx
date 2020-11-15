import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Customer } from "../pages/customer/customer";
import { directions } from "./directions";

export function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path={directions.admin} render={() => <div>Admin</div>} />
        <Route path={directions.customer} component={Customer} />
      </Switch>
    </Router>
  )
}