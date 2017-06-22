import { connect } from 'react-redux';
import { loadable } from 'react-kinetic-core';
import { actions } from '../../redux/modules/team';

import { TeamView } from './TeamView';

export const mapStateToProps = ({ profile, current_team }) => ({
  team: current_team.data,
  loading: current_team.loading,
  errors: current_team.errors,
  profile,
});
export const mapDispatchToProps = actions;

const LoadableTeams = loadable({
  onMount: props => props.match.params.teamSlug !== 'new' && props.fetchTeam(props.match.params.teamSlug),
  onUnmount: props => props.clearTeam(),
})(TeamView);
export const TeamContainer = connect(mapStateToProps, mapDispatchToProps)(LoadableTeams);
