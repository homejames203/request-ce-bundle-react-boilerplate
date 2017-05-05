import axios from 'axios';

const PROFILE_ENDPOINT = `${window.bundle.apiLocation()}/me`;

export const fetchProfile = () => axios.get(PROFILE_ENDPOINT);
export const putProfile = profile => axios.put(PROFILE_ENDPOINT, profile);
