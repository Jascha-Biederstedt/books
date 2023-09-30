import React from 'react';

import Table from 'components/Table';

const fetchGitHubUsers = async () => {
  const res = await fetch('https://api.github.com/search/users?q=greg', {
    next: {
      revalidate: 60,
    },
  });
  await new Promise(resolve => setTimeout(resolve, 2000));
  const data = await res.json();
  return data.items;
};

const GitHubUsers = async () => {
  const users = await fetchGitHubUsers();

  return (
    <div>
      <h1 className='px-8 py-4 font-bold'>GitHub Users</h1>
      <Table users={users} />
    </div>
  );
};

export default GitHubUsers;
