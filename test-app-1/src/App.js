import React from "react";
import { Component1 } from "./comp-1/component1";
import { Component2 } from "./comp-2/component2";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageLength: 0,
    };
  }

  onComponentOneChange = (userData) => {
    this.setState({
      messageLength: userData.length
    })
  }
  
  render() {
    return (
      <div className="container mt-5">
        <Component1 onUserType={this.onComponentOneChange}  />
        <Component2 usernameLength={this.state.messageLength} />
        <p className="bg-warn p-2">{this.state.messageLength}</p>
      </div>
    );
  }
}
