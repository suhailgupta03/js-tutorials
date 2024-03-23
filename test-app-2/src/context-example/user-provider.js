import React, { createContext, useState } from 'react';

export const UserContext = createContext(null); // this is
// how we create the context


export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'John Doe', age: 30 });

  // UserContext is a React context object
  // Provider is a Property of this UserContext Object
  // UserContext.Provider -> ReactNode
  const Provider = UserContext.Provider;
  
  return (
    <Provider value={{ user, setUser }}>
      {children}
    </Provider>
  );
}
