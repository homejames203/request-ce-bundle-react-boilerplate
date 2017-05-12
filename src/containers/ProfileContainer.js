import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Profile } from '../components/Profile';
import { actions } from '../redux/modules/profile';

export const stateMapper = ({ profile }) => ({
  initialValues: profile.data,
  loaded: profile.loaded,
  failed: profile.failed,
  data: profile.data,
});

export const dispatchMapper = {
  clearProfile: actions.clearProfile,
  fetchProfile: actions.fetchProfile,
  updateProfile: actions.updateProfile,
};

export const validate = () => ({});

export const onSubmit = (values, dispatch, props) => {
  props.updateProfile(values).then(result => {
    // eslint-disable-next-line no-console
    console.log(result.error ? 'Error updating profile.' : 'Profile was updated.');
  });
};

@reduxForm(
  {
    form: 'profile',
    fields: ['username', 'displayName', 'email'],
    validate,
    onSubmit,
  },
  stateMapper,
  dispatchMapper,
)
export class ProfileContainer extends Component {
  componentWillMount() {
    this.props.fetchProfile();
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }

  render() {
    return <Profile {...this.props} />;
  }
}
