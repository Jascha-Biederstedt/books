import { NextResponse } from 'next/server';

import books from './data.json';

export const GET = async req => {
  return NextResponse.json(books);
};

export const POST = async req => {
  const { title, link, img } = await req.json();

  const newBook = {
    id: books.length + 1,
    title,
    link,
    img,
  };

  books.push(newBook);

  return NextResponse.json('Book added successfully');
};
