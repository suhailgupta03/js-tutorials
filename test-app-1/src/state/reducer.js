import { INCREMENT, DECREMENT } from './actions';
import { combineReducers } from '@reduxjs/toolkit';

// the current state and an action as arguments and return a new state.
function counterReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }; // update the state
      // and return
    case DECREMENT:
      return { count: state.count - 1 }; // update the state 
      // and return
    default:
      return {
        count: 0
      };
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  // otherState: otherReducer,
}); // it represents all the changes that will happen to the state
// when the action is triggered

export default rootReducer;

