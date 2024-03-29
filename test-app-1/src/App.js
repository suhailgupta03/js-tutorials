// https://redux.js.org/introduction/installation

// npm install @reduxjs/toolkit
// npm install react-redux

import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import Counter from './state/counter';
import CustomDisplay from './state/custom-display';

// App Component
export default function App() {
  return (
    <Provider store={store}>
      {
        // the above line exposes store to all the child components
      }
      <Counter />
      <CustomDisplay />
    </Provider>
  );
}