// UserProfile.js
import React, { Component } from 'react';

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData() {
    // Simulate fetching user data
    this.setState({ error: "Failed to load user", isLoading: false })
  }

  render() {
    const { isLoading, userData, error } = this.state;

    if (isLoading) return <div>Loading...</div>;
    if (error) throw error; // This will be caught by ErrorBoundary

    return (
      <div>
        <h1>{userData.name}</h1>
        <p>{userData.bio}</p>
      </div>
    );
  }
}

