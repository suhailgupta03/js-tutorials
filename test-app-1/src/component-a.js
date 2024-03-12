import React from "react";

export class ComponentA extends React.Component {
  componentDidMount() {
    console.log("ComponentA was mounted");
  }

  componentWillUnmount() {
    console.log("ComponentA was unmounted");
  }
  render() {
    return (
      <div className="m-5 p-2 border">
        <img
          width={400}
          height={400}
          className="img-thumbnail"
          alt="..."
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Anatomy_of_a_Sunset-2.jpg/600px-Anatomy_of_a_Sunset-2.jpg"
        />
      </div>
    );
  }
}
