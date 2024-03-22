import React from "react";
import { Component1 } from "./comp-1/component1";
import { Component2 } from "./comp-2/component2";
import { Component3 } from "./comp-3/component3";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageLength: 0,
      comments: [],
    };
  }

  onComponentOneChange = (userData) => {
    this.setState({
      messageLength: userData.length
    })
  }

  onNewCommentsReceived = (d) => {
    this.setState({
      comments: d
    });
  }
  
  render() {
    return (
      <div className="container mt-5">
        <Component1 onUserType={this.onComponentOneChange}  />
        <Component2 usernameLength={this.state.messageLength} />
        <p>New comments ...</p>
        <Component3 shareComments={this.onNewCommentsReceived} />
        {this.state.comments.map(item =>  <p>
          {item.name}
        </p>)}
      </div>
    );
  }
}
