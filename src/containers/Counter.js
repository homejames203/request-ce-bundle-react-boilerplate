import { connect } from 'react-redux';
import { actions } from '../redux/modules/counter';
import Counter from '../components/Counter';

export const stateMapper = (state) => ({
  counter: state.counter
});

export const dispatchMapper = {
  inc: actions.incrementCounter,
  dec: actions.decrementCounter,
  double: actions.doubleCounter
};

export default connect(stateMapper, dispatchMapper)(Counter);