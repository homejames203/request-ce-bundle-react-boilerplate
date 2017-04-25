import React from 'react';
import { Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { CatalogContainer } from './CatalogContainer';
import { CounterContainer } from './CounterContainer';
import { ProfileContainer } from './ProfileContainer';
import { Home } from '../components/Home';

export const AppContainer = () =>
  <div className="layout">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/catalog">Catalog</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
    <hr />
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={CounterContainer} />
    <Route path="/catalog" component={CatalogContainer} />
    <Route path="/profile" component={ProfileContainer} />
  </div>;
