import { connect } from 'react-refetch';
import Profile from '../components/Profile';

const refetchMapper = (props) => ({
  me: `${bundle.apiLocation()}/me`
});

export default connect(refetchMapper)(Profile);