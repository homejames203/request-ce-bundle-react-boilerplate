import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/counter';

const Counter = ({ counter, inc, dec }) =>
  <h2>
    <button type="button" onClick={dec}>-</button>
    Counter: {counter}
    <button type="button" onClick={inc}>+</button>
  </h2>;

const stateMapper = (state) => ({
  counter: state.counter
});
const dispatchMapper = {
  inc: actions.incrementCounter,
  dec: actions.decrementCounter
};
export default connect(stateMapper, dispatchMapper)(Counter);