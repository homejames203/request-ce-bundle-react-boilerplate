import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { types, actions } from '../modules/profile';
import { fetchProfile, putProfile } from '../../helpers/profileRequest';

export function* doUpdateProfile(action) {
  // Call the putProfile helper and once resolved grab errors or the profile.
  const { profile, errors } = yield call(putProfile, action.payload);

  if (errors) {
    // If there are errors, put an error action into Redux.
    yield put(actions.fetchProfileError(errors));
  } else {
    // Otherwise put set profile action into Redux.
    yield put(actions.setProfile(profile));
  }
}

export function* doFetchProfile() {
  // Call the fetchProfile helper and once resolve grab errors or profile.
  const { profile, errors } = yield call(fetchProfile);

  if (errors) {
    // If there are errors, put an error action into Redux.
    yield put(actions.fetchProfileError(errors));
  } else {
    // Otherwise put set profile action into Redux.
    yield put(actions.setProfile(profile));
  }
}

export function* watchProfile() {
  // Whenever a FETCH_PROFILE action is heard, execute doFetchProfile.
  yield takeEvery(types.FETCH_PROFILE, doFetchProfile);
  // Whenever an UPDATE_PROFILE action is heard, execute doUpdateProfile.
  yield takeEvery(types.UPDATE_PROFILE, doUpdateProfile);
}
