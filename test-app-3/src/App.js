import React from "react";
import { NotFound } from "./not-found";
import { UserProfile } from "./my-component";
import ParentComponent from "./memo-example";
import { TestComponent } from "./test-component";

export default function App() {
  return (
    <NotFound>
      <TestComponent />
    </NotFound>
    // <ParentComponent />
    // <ErrorBoundary>
    //   <UserProfile />
    // </ErrorBoundary>
  );
}
