import React from 'react';

export const RequiresSpaceAdmin = ({ profile, children }) => {
  if (profile.data.spaceAdmin) {
    return <div>{children}</div>;
  }
  return <h2 style={{ color: 'red' }}>{'Access denied, son.'}</h2>;
};
