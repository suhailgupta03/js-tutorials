import React from "react";
import { UserProfile } from "./user-profile";

export class UserEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      role: "",
    };
  }

  onNameChange = (event) => {
    const n = event.target.value;
    this.setState({
      name: n,
    });
    console.log("state set", n);
  };

  onDescriptionChange = (event) => {
    const d = event.target.value;
    this.setState({
      ...this.state, // merging previous states with the value of the description
      description: d,
    });
  };

  onRoleChange = (event) => {
    const r = event.target.value;
    this.setState({
      ...this.state, // merging previous states with the value of the description
      role: r,
    });
  };

  render() {
    return (
      <div className="d-flex flex-column">
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            onChange={this.onNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userRole" className="form-label">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            id="userRole"
            onChange={this.onRoleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userDescription" className="form-label">
            User description
          </label>
          <textarea
            className="form-control mb-5"
            id="userDescription"
            rows="3"
            onChange={this.onDescriptionChange}
          ></textarea>


          <UserProfile
            name={this.state.name}
            role={this.state.role}
            description={this.state.description}
          />
        </div>
      </div>
    );
  }
}
