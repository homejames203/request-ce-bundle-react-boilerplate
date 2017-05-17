import { watchProfile } from './sagas/profile';

export function* sagas() {
  yield [
    watchProfile(),
  ];
}
