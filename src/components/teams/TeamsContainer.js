import { connect } from 'react-redux';
import { loadable } from 'react-kinetic-core';
import { actions } from '../../redux/modules/teams';

import { Teams } from './Teams';

export const mapStateToProps = ({ profile, all_teams }) => ({
  teams: all_teams.data,
  loading: all_teams.loading,
  errors: all_teams.errors,
  profile,
});
export const mapDispatchToProps = actions;

const LoadableTeams = loadable({ onMount: props => props.fetchTeams() })(Teams);
export const TeamsContainer = connect(mapStateToProps, mapDispatchToProps)(LoadableTeams);
