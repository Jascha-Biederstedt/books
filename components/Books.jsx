import React from 'react';

const getBooks = async () => {
  const res = await fetch('http://localhost:3000/api/books');
  const data = await res.json();
  return data;
};

const Books = async () => {
  const books = await getBooks();

  return <div>Books</div>;
};

export default Books;
