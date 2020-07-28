import React from "react";
import { ErrorPage } from "./errorPage";

interface IState {
  hasError: Error | null;
}

class ErrorBoundary extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = { hasError: null };
  }

  componentDidCatch(error: Error) {
    this.setState({ hasError: error });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorPage error={hasError} /> : children;
  }
}

export { ErrorBoundary };
