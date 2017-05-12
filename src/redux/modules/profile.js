import axios from 'axios';
import { Cmd, loop } from 'bdwain-redux-loop';
import { bundle } from 'react-kinetic-core';
import { dumbAction } from '../actions';

const PROFILE_ENDPOINT = `${bundle.apiLocation()}/me`;

export const types = {
  CLEAR_PROFILE: 'CLEAR_PROFILE',
  FETCH_PROFILE: 'FETCH_PROFILE',
  FETCH_PROFILE_SUCCESS: 'FETCH_PROFILE_SUCCESS',
  FETCH_PROFILE_ERROR: 'FETCH_PROFILE_ERROR',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_ERROR: 'UPDATE_PROFILE_ERROR',
};

export const actions = {
  clearProfile: dumbAction(types.CLEAR_PROFILE),
  fetchProfile: dumbAction(types.FETCH_PROFILE),
  fetchProfileSuccess: dumbAction(types.FETCH_PROFILE_SUCCESS),
  fetchProfileError: dumbAction(types.FETCH_PROFILE_ERROR),
  updateProfile: dumbAction(types.UPDATE_PROFILE),
  updateProfileSuccess: dumbAction(types.UPDATE_PROFILE_SUCCESS),
  updateProfileError: dumbAction(types.UPDATE_PROFILE_ERROR),
};

export const defaultState = { loaded: false, failed: false, data: null };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.CLEAR_PROFILE:
      return defaultState;
    case types.FETCH_PROFILE:
      return loop(
        { ...state, loaded: false },
        Cmd.run(axios, {
          args: [{ url: PROFILE_ENDPOINT, method: 'get' }],
          successActionCreator: actions.fetchProfileSuccess,
          failActionCreator: actions.fetchProfileError,
        }),
      );
    case types.FETCH_PROFILE_SUCCESS:
      return { loaded: true, failed: false, data: action.payload.data };
    case types.FETCH_PROFILE_ERROR:
      return { loaded: true, failed: true, data: action.payload.response.status };
    default: return state;
  }
};

export default reducer;
