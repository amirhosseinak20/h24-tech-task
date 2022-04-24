import React, { Component, ErrorInfo, ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
};
type StateTypes = {
  hasError: boolean;
};
export class ErrorBoundary extends Component<PropTypes, StateTypes> {
  public state: StateTypes = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): StateTypes {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}
