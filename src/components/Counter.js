import React from 'react';

export const Counter = ({ counter, inc, dec, double }) =>
  <h2>
    <button type="button" onClick={dec}>-</button>
    Counter: {counter}
    <button type="button" onClick={inc}>+</button>
    <button type="button" onClick={double}>* 2</button>
  </h2>;
