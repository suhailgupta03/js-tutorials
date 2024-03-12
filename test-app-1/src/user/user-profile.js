import React from "react";

export class UserProfile extends React.Component {

  componentDidMount() {
    console.log("component was mounted")
  }
  componentDidUpdate() {
    console.log("Component was updated!"); // props has been updated
  }

  

  render() {
    return this.props.name ? (
      <div
        className="card fs-2"
        style={{
          width: "25rem",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {this.props.role}
          </h6>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    ) : null;
  }
}
