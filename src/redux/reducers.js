import counterReducer from './modules/counter';
import profileReducer from './modules/profile';
import teamsReducer from './modules/teams';
import teamReducer from './modules/team';
import errorsReducer from './modules/errors';
import submissionsReducer from './modules/submissions';

export default {
  counter: counterReducer,
  profile: profileReducer,
  all_teams: teamsReducer,
  current_team: teamReducer,
  errors: errorsReducer,
  submissions: submissionsReducer,
};
