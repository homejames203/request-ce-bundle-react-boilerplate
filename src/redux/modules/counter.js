export const types = {
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  DECREMENT_COUNTER: 'DECREMENT_COUNTER',
};

export const actions = {
  incrementCounter: () => ({ type: types.INCREMENT_COUNTER }),
  decrementCounter: () => ({ type: types.DECREMENT_COUNTER }),
};

export const defaultState = 0;

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case types.INCREMENT_COUNTER: return state + 1;
    case types.DECREMENT_COUNTER: return state - 1;
    default: return state;
  }
};

export default reducer;