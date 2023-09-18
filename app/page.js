import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <button className='btn btn-primary'>Primary</button>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/about/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
