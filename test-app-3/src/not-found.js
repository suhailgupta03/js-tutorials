import * as React from "react";

export class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  /**
   * getDerivedStateFromError in React Error Boundaries serves to update the component's state
   *  when an error is caught, allowing the component to render a fallback UI instead of crashing.
   *  It's a static method called during the "render" phase, so side effects are not permitted here.
   */
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    // This static method is called first. It allows the Error Boundary to update its state based on the caught error, 
    // signaling that an error has occurred. This is where you can set a flag in the state to indicate an error state.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // Since it's called after an error has been caught, it can be used to execute side effects like setting state
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
    //  After getDerivedStateFromError, this lifecycle method is called.
    // It receives the error and additional information about the error as arguments.
    //  This is primarily used for side effects like logging the error to an external system.
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return<h1>{this.state.error.message}</h1>
    }

    return (
      <>
        {this.props.children}
      </>
    );
  }
}

/**
 * - First, React uses getDerivedStateFromError to let the Error Boundary know an error happened and to adjust its state accordingly, usually to prepare for rendering a fallback UI.
 * - Then, componentDidCatch is called, allowing you to react to the error by logging it or performing other side effects.
 */