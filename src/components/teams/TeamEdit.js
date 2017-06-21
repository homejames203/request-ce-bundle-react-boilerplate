import React from 'react';
import { reduxForm } from 'redux-form';

import { actions } from '../../redux/modules/team';
import { TeamForm, validate } from './TeamForm';

const submitEditForm = (values, dispatch, props) => {
  dispatch(actions.updateTeam(props.team.slug, values));
};

const TeamEditForm = reduxForm(
  {
    form: 'teamEditForm',
    fields: ['name', 'description'],
    onSubmit: submitEditForm,
    validate,
  },
  ({ current_team }) => ({
    initialValues: { ...current_team.data },
    apiErrors: current_team.errors,
  }),
)(TeamForm);

export const TeamEdit = props => (
  <div>
    <h1>Edit Team!</h1>
    <TeamEditForm {...props} initialValues={props.team} />
  </div>
);
