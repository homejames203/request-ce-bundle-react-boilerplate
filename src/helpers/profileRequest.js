import axios from 'axios';
import { bundle } from 'react-kinetic-core';
import { success, error } from '../helpers/http';

const PROFILE_ENDPOINT = `${bundle.apiLocation()}/me`;

// Extract the profile from the data and return it.
// If there are any errors clean them up and return them instead.
export const fetchProfile = () => axios.get(PROFILE_ENDPOINT)
  .then(success('profile'))
  .catch(error);

// Extract the profile from the data, remove the 'user' envelope, and return that.
// If there are any errors clean them up and return them instead.
export const putProfile = profile => axios.put(PROFILE_ENDPOINT, profile)
  .then(success('profile'))
  .then(({ user }) => ({ profile: user }))
  .catch(error);
