import React from 'react';
import Link from 'next/link';

const getBooks = async () => {
  const res = await fetch('http://localhost:3000/api/books');
  const data = await res.json();
  return data;
};

const Books = async () => {
  const books = await getBooks();

  return (
    <div>
      <h1 className='text-center pt-8 pb-10 text-lg font-bold'>Books</h1>
      <div className='flex flex-wrap justify-center'>
        {books.map(book => (
          <div key={book.id} className='mx-4 mb-4 text-center'>
            <div className='card w-96 bg-base-100 shadow-xl'>
              <figure>
                <img src={book.img} width='200' height='150' alt='book cover' />
              </figure>
              <div className='card-body'>
                <p className='card-title mx-auto'>{book.id}</p>
                <p className='mb-4 font-bold'>{book.title}</p>
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
