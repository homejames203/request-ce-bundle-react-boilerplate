import React from 'react';
import { Route, Link } from 'react-router-dom';

import Counter from './Counter';
import Home from '../components/Home';
import Profile from './Profile';
import Catalog from './Catalog';

import 'bootstrap/dist/css/bootstrap.css';

export default () =>
  <div className="layout">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/catalog">Catalog</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>

    <hr/>

    <Route path="/counter" component={Counter}/>
    <Route path="/catalog" component={Catalog}/>
    <Route path="/profile" component={Profile}/>
  </div>
