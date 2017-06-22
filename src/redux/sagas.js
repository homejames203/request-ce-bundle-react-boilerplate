import { watchProfile } from './sagas/profile';
import { watchTeams } from './sagas/teams';

export function* sagas() {
  yield [
    watchProfile(),
    watchTeams(),
  ];
}
