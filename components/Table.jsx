import React from 'react';
import Link from 'next/link';

const Table = ({ users }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Repos</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <div className='flex items-center space-x-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img src={user.avatar_url} />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>{user.login}</div>
                    <div className='text-sm opacity-50'>{user.id}</div>
                  </div>
                </div>
              </td>

              <td>
                <Link href={user.html_url} className='btn btn-link pl-0'>
                  View on GitHub
                </Link>
              </td>

              <th>Go to Repos</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
