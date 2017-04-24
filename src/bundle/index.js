/**
 * README - ...
 */

// Loading global polyfills
require('es6-object-assign').polyfill();
require('es6-promise').polyfill();
require('isomorphic-fetch');

// Importing libraries
import { AppContainer as HotLoaderContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { reducer as formReducer } from 'redux-form';
import { createHashHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

// Importing bundle files
import { AppContainer } from '../containers/AppContainer';
import reducers from '../redux/reducers';

// Preparing history and redux store using the 'history' and 'redux' libraries
const history = createHashHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(combineReducers({ ...reducers, form: formReducer })),
  composeEnhancers(applyMiddleware(routerMiddleware(history), promiseMiddleware))
);

// Rendering the application
const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <HotLoaderContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route path="/" component={Component}/>
        </ConnectedRouter>
      </Provider>
    </HotLoaderContainer>,
    rootEl
  );
render(AppContainer);

// Enable hot module replacement so that file changes are automatically
// communicated to the browser when running in development mode
if (module.hot) {
  module.hot.accept('../containers/AppContainer', () => render(AppContainer));
  module.hot.accept('../redux/reducers', () =>
    store.replaceReducer(connectRouter(history)(combineReducers(reducers))));
}
