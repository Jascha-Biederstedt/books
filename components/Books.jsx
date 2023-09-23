'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import LoadingPage from '@/app/loading';

const getBooks = async () => {
  const res = await fetch('http://localhost:3000/api/books');
  const data = await res.json();
  return data;
};

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getBooks().then(books => {
      setBooks(books);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <LoadingPage />;

  const handleSubmit = async event => {
    event.preventDefault();

    console.log(query);
  };

  return (
    <div>
      <h1 className='text-center pt-8 pb-10 text-lg font-bold'>Books</h1>
      <form onSubmit={handleSubmit} className='text-center mb-16'>
        <input
          type='text'
          placeholder='Search Books...'
          value={query}
          onChange={event => {
            setQuery(event.target.value);
          }}
          className='input input-bordered w-full max-w-xs mr-3'
        />
        <button type='submit' className='btn btn-primary'>
          Search
        </button>
      </form>
      <div className='flex flex-wrap justify-center'>
        {books.map(book => (
          <div key={book.id} className='mx-4 mb-4 text-center'>
            <div className='card w-96 bg-base-100 shadow-xl'>
              <figure>
                <img src={book.img} width='200' height='150' alt='book cover' />
              </figure>
              <div className='card-body'>
                <p className='card-title mx-auto'>{book.id}</p>
                <p className='mb-6 font-bold'>{book.title}</p>
                <div className='card-actions justify-between'>
                  <Link href={book.link} className='btn btn-primary'>
                    See in Amazon
                  </Link>
                  <button className='btn btn-error'>Delete</button>
                </div>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
