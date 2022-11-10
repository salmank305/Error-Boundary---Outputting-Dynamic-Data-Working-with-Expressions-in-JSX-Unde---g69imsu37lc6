import React from "react";

class ErrorBoundary extends React.Component {
 

  render() {
    if (this.state.hasError) {
      return (
        <p id="error">
          Their is an error in your react app.Please Check again.This message has been generated from error boundary
        </p>
      );
    }
    return <>{this.props.children}</>;
  }
}
export default ErrorBoundary;
