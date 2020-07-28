import { ErrorBoundary } from "pages/errorBoundary/errorBoundary";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./basic.scss";
import { WelcomePage } from "./pages/welcomePage/welcomePage";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/" component={WelcomePage} />
          <Route path="/workouts" component={WelcomePage} />
        </Switch>
      </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root"),
);
