import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TeamShow } from './TeamShow';
import { TeamEdit } from './TeamEdit';
import { TeamCreate } from './TeamCreate';

const TeamDelete = () => (
  <h1>Are you sure?</h1>
);

export const TeamView = props => (
  <div>
    <Route path="/teams/:teamSlug/edit" exact component={() => <TeamEdit team={props.team} errors={props.errors} />} />
    <Route path="/teams/:teamSlug/delete" exact component={TeamDelete} />
    <Switch>
      <Route path="/teams/new" exact component={TeamCreate} />
      <Route path="/teams/:teamSlug" exact component={() => <TeamShow team={props.team} />} />
    </Switch>
  </div>
);
