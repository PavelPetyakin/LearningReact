import { ErrorBoundary } from "pages/errorBoundary/errorBoundary";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./basic.scss";
import { AppRouter } from "./routing/appRouter";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <AppRouter/>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root"),
);
