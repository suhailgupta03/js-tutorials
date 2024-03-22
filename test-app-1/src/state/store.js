import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

// Store
const store = configureStore({
  reducer: rootReducer,
}); // so we are binding STORE (that holds the global state)
// with REDUCER (which represents the change in the state)

export default store;