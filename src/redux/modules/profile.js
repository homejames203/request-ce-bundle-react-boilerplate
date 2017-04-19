import axios from 'axios';

const PROFILE_ENDPOINT = bundle.apiLocation() + '/me';

export const types = {
  FETCH_PROFILE: 'FETCH_PROFILE',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
};

export const actions = {
  fetchProfile: () => ({
    type: types.FETCH_PROFILE,
    payload: axios.get(PROFILE_ENDPOINT)
  }),
  updateProfile: (profile) => ({
    type: types.UPDATE_PROFILE,
    payload: axios.put(PROFILE_ENDPOINT, profile)
  }),
};

const reducer = (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_PROFILE:
      return action.payload.data;
    case types.UPDATE_PROFILE:
      return action.payload.data.user;
    default: return state;
  }
};

export default reducer;