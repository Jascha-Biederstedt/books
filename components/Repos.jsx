import React from 'react';

const fetchRepos = async user => {
  const res = await fetch(`https://api.github.com/users/${user}/repos`);
  const data = res.json();
  return data;
};

const Repos = async ({ user }) => {
  const repos = await fetchRepos(user);

  return (
    <div>
      <h1 className='px-8 py-4 font-bold'>{user}'s Repos</h1>
      <div className='overflow-x-auto px-4'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {repos.map(repo => (
              <tr>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Repos;
