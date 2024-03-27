import * as React from "react";

// UserProfile component
export const UserProfile = (({ name, email }) => {
  console.log("Rendering UserProfile for:", name); // To demonstrate when re-rendering occurs
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
});

// ParentComponent that uses UserProfile
export class ParentComponent extends React.Component {
  state = {
    userName: "John Doe",
    userEmail: "john.doe@example.com",
  };

  // Example function to update state, triggering a re-render
  updateUserEmail = () => {
    this.setState({ userEmail: "john.doe@example.com" });
  };

  render() {
    return (
      <div>
        <UserProfile name={this.state.userName} email={this.state.userEmail} />
        <button onClick={this.updateUserEmail}>Update Email</button>
      </div>
    );
  }
}

export default ParentComponent;
