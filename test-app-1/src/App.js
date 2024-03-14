import React from "react";
import { Counter } from "./user/counter";

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
        <Counter />
      </div>
    );
  }
}
