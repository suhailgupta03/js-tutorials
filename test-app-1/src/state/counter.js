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

// Connect Redux to React
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
