import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { withHandlers } from 'recompose';

import { TeamShow } from './TeamShow';
import { TeamEdit } from './TeamEdit';
import { TeamCreate } from './TeamCreate';

const enhance = withHandlers({
  onConfirm: ({ deleteTeam, team }) => () => {
    deleteTeam(team.slug);
  },
});

const TeamDelete = enhance(({ onConfirm }) =>
  <div>
    <h1>Are you sure?</h1>
    <button className="btn btn-danger" onClick={onConfirm}>Yes, delete this team.</button>
    <LinkContainer to="/teams" className="btn btn-link">
      <button >No, back to team list.</button>
    </LinkContainer>
  </div>,
);

export const TeamView = props => (
  <div>
    <Route path="/teams/:teamSlug/edit" exact component={() => <TeamEdit team={props.team} errors={props.errors} />} />
    <Route path="/teams/:teamSlug/delete" exact component={() => <TeamDelete {...props} />} />
    <Switch>
      <Route path="/teams/new" exact component={TeamCreate} />
      <Route path="/teams/:teamSlug" exact component={() => <TeamShow team={props.team} />} />
    </Switch>
  </div>
);
