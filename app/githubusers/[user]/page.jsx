import React from 'react';

import Repos from 'components/Repos';

const UserRepo = ({ params: { user } }) => {
  return (
    <div>
      <Repos user={user} />
    </div>
  );
};

export default UserRepo;
