import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import Counter from './state/counter';
import CustomDisplay from './state/custom-display';

// App Component
export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <CustomDisplay />
    </Provider>
  );
}