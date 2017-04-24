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
import { createHashHistory } from 'history';

// Importing bundle files
import { AppContainer } from '../containers/AppContainer';
import { configureStore } from '../redux/store';

// Preparing browser history for the react router and redux store using the
// 'history' library.  We are currently using the hash history implementation.
const history = createHashHistory();
// Use the 'configureStore' helper to initialize our redux store.
const store = configureStore(history);

// Create a render function that takes the root component of our application
// (AppContainer) and wraps it the router, redux, and hot loader components.
// This is done in a helper function because we want to call this render helper
// when new code is compiled in dev mode.
const render = () =>
  ReactDOM.render(
    <HotLoaderContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route path="/" component={AppContainer}/>
        </ConnectedRouter>
      </Provider>
    </HotLoaderContainer>,
    document.getElementById('root'));

// Trigger the initial render of our application.
render();

// Enable hot module replacement so that file changes are automatically
// communicated to the browser when running in development mode
if (module.hot)
  module.hot.accept('../containers/AppContainer', render);
