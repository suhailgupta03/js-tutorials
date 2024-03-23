import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './user-provider';

function ComponentA() {
  const { user, } = useContext(UserContext);
  const [u, ] = useState(user); // initialize internal state with the user-context

  /**
   * useContext is a HOOK. This function will identify
   * the PROVIDER that this UserContext is associated with.
   * 
   * The way it identifies is, from the PARENT COMPONENT.
   * So, the parent component has the information on the 
   * UserContext
   */
  return (
    <div style={{
        backgroundColor: "#ccc",
        border: "1px",
        margin: "2em",
        padding: "1em"
    }}>
      <h1>This is Component A</h1>
      <p>Name: {u.name}</p>
      <p>Age: {u.age}</p>
    </div>
  );
}

export default ComponentA;