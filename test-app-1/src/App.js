import React from "react";
import { ComponentA } from "./component-a";
import { ComponentB } from "./component-b";
import { UserEntry } from "./user/user-entry";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isImageVisible: false,
      isVideoVisible: false,
    };
  }

  onShowImageClick = () => {
    this.setState({
      isImageVisible: true, // we want this to be TRUE
      isVideoVisible: false, // we want to REVERT any previous show-video click
    });
  };

  onShowVideoClick = () => {
    this.setState({
      isVideoVisible: true, // we want this to be TRUE
      isImageVisible: false, // we want to REVERT any previous show-image click
    });
  };

  render() {
    return (
      <div className="container mt-3">
        <UserEntry />
        {/* <div className="d-flex flex-row">
          <button
            className="btn btn-primary btn-lg m-1"
            onClick={this.onShowImageClick}
          >
            Show Image
          </button>
          <button
            className="btn btn-primary btn-lg m-1"
            onClick={this.onShowVideoClick}
          >
            Show Video
          </button>
        </div>

        {this.state.isImageVisible ? <ComponentA /> : null}
        {this.state.isVideoVisible ? <ComponentB /> : null} */}
      </div>
    );
  }
}
