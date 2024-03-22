import React from 'react';
import { connect } from 'react-redux';

// React DisplayCount Component
const DisplayCount = ({ count }) => (
  <div>
    <h2>Current Count: {count}</h2>
  </div>
);

// Map Redux state to component props
const mapStateToProps = (state) => ({
  count: state.counter.count
});

// Connect Redux to React
export default connect(mapStateToProps)(DisplayCount);
