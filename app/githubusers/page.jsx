import React from 'react';

const fetchGitHubUsers = async () => {
  const res = await fetch('https://api.github.com/search/users?q=greg');
  const data = await res.json();
  return data.items;
};

const GitHubUsers = async () => {
  const users = await fetchGitHubUsers();

  console.log(users);

  return (
    <div>
      <h1>GitHub Users</h1>
    </div>
  );
};

export default GitHubUsers;
