import * as React from "react";

// UserProfile component
// memo : memoized : placed inside memory 
const UserProfile = React.memo(({ name, email }) => {
    console.log('Rendering UserProfile for:', name); // To demonstrate when re-rendering occurs
    return (
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  });
  
  // ParentComponent that uses UserProfile
  class ParentComponent extends React.Component {
    state = {
      userName: 'John Doe',
      userEmail: 'john.doe@example.com',
      xyz: '..'
    };
  
    // Example function to update state, triggering a re-render
    updateUserEmail = () => {
      this.setState({
        xyz: "....,"
      })
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
  