import React from 'react';
import { connect as refetchConnect } from 'react-refetch';

const Profile = ({ children, me }) => {
  if (me.pending) {
    return <div>Loading profile...</div>;
  } else if (me.rejected) {
    return <div>There was an error loading your profile!</div>;
  } else {
    return <div>
      <h1>Hello {me.value.username}, how can we help you?</h1>
    </div>
  }
};

const resolver = (props) => ({
  me: bundle.apiLocation() + '/me'
});
export default refetchConnect(resolver)(Profile);
