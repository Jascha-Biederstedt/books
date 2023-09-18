import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link href={'/'} className='btn btn-ghost normal-case text-xl'>
          Greg's Portfolio of Small Bets
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/about/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/githubusers'>Github Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
