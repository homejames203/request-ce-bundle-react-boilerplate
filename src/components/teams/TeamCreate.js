import React from 'react';
import { reduxForm } from 'redux-form';

import { actions } from '../../redux/modules/team';
import { TeamForm, validate } from './TeamForm';

const submitCreateForm = (values, dispatch) => {
  dispatch(actions.createTeam(values));
};

const TeamCreateForm = reduxForm(
  {
    form: 'teamCreateForm',
    fields: ['name', 'description'],
    onSubmit: submitCreateForm,
    validate,
  },
  ({ current_team }) => ({ apiErrors: current_team.errors }),
)(TeamForm);

export const TeamCreate = props => (
  <div>
    <h1>New Team</h1>
    <TeamCreateForm {...props} />
  </div>
);
