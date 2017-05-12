import { compose, createStore, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import { install, combineReducers } from 'bdwain-redux-loop';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';

export const configureStore = history => {
  // To enable the redux dev tools in the browser we need to conditionally use a
  // special compose method, below we are looking for that and if it does not
  // exist we use the build-in redux 'compose' method.
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // Create the redux store using reducers imported from our 'redux/reducers'
  // module.  Note that we also have some connected react router and redux form
  // setup going on here as well.
  const store = createStore(
    combineReducers({ ...reducers, form, router }),
    composeEnhancers(applyMiddleware(routerMiddleware(history)), install()),
  );
  // Enable hot module replacement so that file changes are automatically
  // communicated to the browser when running in development mode
  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => store.replaceReducer(combineReducers({ ...reducers, form, router })));
  }
  return store;
};
