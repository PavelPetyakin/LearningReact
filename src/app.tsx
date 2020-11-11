import { ErrorBoundary } from "pages/errorBoundary/errorBoundary";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./basic.scss";
import { WelcomePage } from "./pages";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/" component={WelcomePage} />
        </Switch>
      </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root"),
);
