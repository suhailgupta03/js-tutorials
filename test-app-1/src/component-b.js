import React from "react";

export class ComponentB extends React.Component {

  componentDidMount() {
    console.log("ComponentB was mounted");
    document.body.classList.add("bg-info");
    
  }

  componentWillUnmount() {
    console.log("ComponentB was unmounted");
    document.body.classList.remove("bg-info");
  }

  render() {
    return (
      <div className="m-5 p-2 border">
        <video height={400} width={400} controls autoPlay>
            <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                type="video/mp4"
            >
            </source>
        </video>
      </div>
    );
  }
}
