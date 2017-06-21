import React from 'react';
import { connect } from 'react-redux';
import { loadable } from 'react-kinetic-core';
import { Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-kinetic-core/styles/modal.scss';

import { actions } from '../redux/modules/profile';

import { CatalogContainer } from './CatalogContainer';
import { CounterContainer } from './CounterContainer';
import { ProfileContainer } from './ProfileContainer';
import { Home } from '../components/Home';
import { FormSample } from '../components/FormSample';
import { TeamsContainer } from '../components/teams/TeamsContainer';
import { SystemErrorContainer } from '../components/SystemErrorContainer';

export const App = () =>
  <div className="layout">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/catalog">Catalog</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/form">Form Sample</Link></li>
      <li><Link to="/teams">Teams</Link></li>
    </ul>
    <hr />
    <Route exact path="/" component={Home} />
    <Route path="/system-error" component={SystemErrorContainer} />
    <Route path="/counter" component={CounterContainer} />
    <Route path="/catalog" component={CatalogContainer} />
    <Route path="/profile" component={ProfileContainer} />
    <Route path="/form" component={FormSample} />
    <Route path="/teams" component={TeamsContainer} />
  </div>;

export const mapDispatchToProps = actions;

const LoadableApp = loadable({
  onMount: props => props.fetchProfile(),
})(App);

export const AppContainer = connect(null, mapDispatchToProps)(LoadableApp);
