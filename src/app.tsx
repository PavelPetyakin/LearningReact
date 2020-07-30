import { ErrorBoundary } from "pages/errorBoundary/errorBoundary";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./basic.scss";
import { WelcomePage, TaskPage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/task" component={TaskPage} />
          <Route path="/" component={WelcomePage} />
        </Switch>
      </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root"),
);
