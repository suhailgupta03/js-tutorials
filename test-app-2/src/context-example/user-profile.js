import React, { useContext, useEffect } from 'react';
import { UserContext } from './user-provider';

function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setInterval(() => { // simulating an external trigger
      setUser({ name: 'John Doer', age: 32 })
      // this will update the user context
      // which means that all the components
      // listening to the same context
      // will have the updated values
    }, 3000);
  }, []);
  /**
   * useContext is a HOOK. This function will identify
   * the PROVIDER that this UserContext is associated with.
   * 
   * The way it identifies is, from the PARENT COMPONENT.
   * So, the parent component has the information on the 
   * UserContext
   */
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;