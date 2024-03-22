import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

// React Counter Component
class Counter extends React.Component {
  render() {
    const { count, myIncrement, myDecrement } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={myIncrement}>Increment</button>
        <button onClick={myDecrement}>Decrement</button>
      </div>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  // state: is a global state object
  // counter: is the key in the state object
  return {
    count: state.counter.count,
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    myIncrement: () => dispatch(increment()), // bind increment
    // function created inside actions.js with redux
    // which means that everytime myIncrement is called
    // it will actually trigger the REDUX flow
    // actions -> reducer -> state update
    myDecrement: () => dispatch(decrement()),
  };
}

const storeConnection = connect(mapStateToProps, mapDispatchToProps);
const newComponent = storeConnection(Counter);
export default newComponent;

// // Connect Redux to React
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// the call to connection function
// returns a new component
// that has a binding with REDUX store
// which means that this new component
// now will have access to all the state changes
// and all those state changes will be accessible 
// as props to the new component
/**
 * connect({
 *   stateA: ..,
 *   stateB: ..,
 * }, {
 *  fnA: ..,
 *  fnB : ..,
 * })
 * 
 * newComponent = storeConnection(Component)
 */